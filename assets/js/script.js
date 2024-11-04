const playBoard = document.querySelector(".game-space");
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let speedX = 0, speedY = 0;
const moveFood = () => {
    // Assigning random x and y co-ordinate for food
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
const changeDirection = (e) => {
    // Changing direction based on arrow clicked
    if(e.key === "ArrowUp"){
        speedX = 0;
        speedY = -1
    }else if(e.key === "ArrowDown"){
        speedX = 0;
        speedY = 1;
    }else if(e.key === "ArrowLeft"){
        speedX = -1;
        speedY = 0;
    }else if(e.key === "ArrowRight"){
        speedX = 1;
        speedY = 0;
    }
    
}
    

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    // Check to see if snake ate the food
    if(snakeX === foodX && snakeY == foodY){
        moveFood();
        snakeBody.push([foodX, foodY]); // push food position to array of snake body
        console.log(snakeBody);
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

    for(let i = 0; i < snakeBody.length; i++){
        // Adding a div element for each cell of the snake's body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    }

    playBoard.innerHTML = htmlMarkup;
}

moveFood();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);