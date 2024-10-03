const playBoard = document.querySelector(".game-space");
let foodX, foodY;
const moveFood = () => {
    // Assigning random x and y co-ordinate for food
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
const initGame = () => {
    let htmlMarkup = ` <div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
moveFood();
initGame();