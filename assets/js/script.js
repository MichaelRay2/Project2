const playBoard = document.querySelector(".game-space");
let foodX = 13, foodY = 10;
const initGame = () => {
    let htmlMarkup = ` <div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
initGame();