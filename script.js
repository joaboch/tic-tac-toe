//Store the gameboard as an array inside of a Gameboard object

function createGameboard () {
  const gameboardArr = 
  ['', '', ''
  , '', '', ''
  , '', '', ''];
  return {gameboardArr};
}

const gameboard = createGameboard();

function playerMove (move) {
  opt = () => prompt('1 - 9') - 1;
  return {move, opt};
}

const player1 = playerMove('X');
const player2 = playerMove('O');

function controlGame () {

}

