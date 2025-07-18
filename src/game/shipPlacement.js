import Ship from "./ship.js";

// Array de tamaños de barcos: 1x5, 2x4, 3x3, 4x2
const SHIP_SIZES = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];

function getRandomOrientation() {
  return Math.random() < 0.5 ? "horizontal" : "vertical";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Verifica si un barco cabe en la posición y orientación dadas
function canPlaceShip(board, x, y, length, orientation) {
  if (orientation === "horizontal") {
    if (x + length > 10) return false;
    for (let k = 0; k < length; k++) {
      if (board.array[y][x + k] !== 0) return false;
    }
  } else {
    if (y + length > 10) return false;
    for (let k = 0; k < length; k++) {
      if (board.array[y + k][x] !== 0) return false;
    }
  }
  return true;
}

// Coloca todos los barcos aleatoriamente en el tablero
export function placeAllShipsRandomly(board) {
  for (let size of SHIP_SIZES) {
    let placed = false;
    while (!placed) {
      const orientation = getRandomOrientation();
      const x = getRandomInt(10);
      const y = getRandomInt(10);
      if (canPlaceShip(board, x, y, size, orientation)) {
        board.placeShip(x, y, new Ship(size), orientation);
        placed = true;
      }
    }
  }
}
