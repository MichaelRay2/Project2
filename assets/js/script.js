const playBoard = document.querySelector(".game-space");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let speedX = 0, speedY = 0;
let setIntervalId;

const moveFood = () => {
    // Assigning random x and y co-ordinate for food
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    // Clears the timer and reloads the page when game is over
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}


const changeDirection = (e) => {
    // Changing direction based on arrow clicked
    if(e.key === "ArrowUp" && speedY != 1){
        speedX = 0;
        speedY = -1
    }else if(e.key === "ArrowDown" && speedY != -1){
        speedX = 0;
        speedY = 1;
    }else if(e.key === "ArrowLeft" && speedX != 1){
        speedX = -1;
        speedY = 0;
    }else if(e.key === "ArrowRight" && speedX != -1){
        speedX = 1;
        speedY = 0;
    }
    
}
    

const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    // Check to see if snake ate the food
    if(snakeX === foodX && snakeY == foodY){
        moveFood();
        snakeBody.push([foodX, foodY]); // push food position to array of snake body
    }

    // Moving forward the values of the snake body elements one at a time
    for (let i = snakeBody.length - 1; i >0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }

    // Setting first element of snake body to current snake position
    snakeBody[0] = [snakeX, snakeY];

    // Updating snake's head position based on the current speed
    snakeX += speedX;
    snakeY += speedY;

    // Check if snake leaves boundary, if yes then game over
    if(snakeX <= 0 || snakeX > 30 || snakeY <=0 || snakeY > 30){
        gameOver = true;
    }

    for(let i = 0; i < snakeBody.length; i++){
        // Adding a div element for each cell of the snake's body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    }

    playBoard.innerHTML = htmlMarkup;
}

moveFood();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);