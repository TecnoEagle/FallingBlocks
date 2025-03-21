const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");
let playerX = window.innerWidth / 2 - 25;
const speed = 5;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && playerX > 0) {
        playerX -= speed;
    } else if (event.key === "ArrowRight" && playerX < window.innerWidth - 50) {
        playerX += speed;
    }
    player.style.left = playerX + "px";
});

function createFallingObject() {
    const object = document.createElement("div");
    object.classList.add("falling-object");
    object.style.left = Math.random() * (window.innerWidth - 30) + "px";
    object.style.top = "0px";
    gameContainer.appendChild(object);

    let fallInterval = setInterval(() => {
        let objectTop = parseInt(object.style.top);
        object.style.top = objectTop + 5 + "px";
        
        if (objectTop > window.innerHeight - 50) {
            let playerRect = player.getBoundingClientRect();
            let objectRect = object.getBoundingClientRect();
            
            if (
                objectRect.left < playerRect.right &&
                objectRect.right > playerRect.left &&
                objectRect.bottom > playerRect.top
            ) {
                alert("¡Has perdido!");
                location.reload();
            }
            clearInterval(fallInterval);
            object.remove();
        }
    }, 30);
}
setInterval(createFallingObject, 1000);