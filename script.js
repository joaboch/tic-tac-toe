//Store the gameboard as an array inside of a Gameboard object

const gameboard = (function () {
  const gameboardArr =
    ['', '', '', '', '', '', '', '', ''];
  return { gameboardArr };
})();


function player(move) {
  opt = () => prompt('1 - 9') - 1;
  return { move, opt };
}

const player1 = player('X');
const player2 = player('O');
