const playBoard = document.querySelector(".game-space");
let foodX = 13, foodY = 10;
const moveFood = () => {
    // Assigning random x and y co-ordinate for food
    foodX = math.floor(Math.random() * 30) + 1;
    foodY = math.floor(math.random() * 30) + 1;
}
const initGame = () => {
    let htmlMarkup = ` <div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
initGame();