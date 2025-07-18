import Player from "./game/player.js";
import Computer from "./game/computer.js";
import Ship from "./game/ship.js";
import renderBoard from "./ui/drawBoard.js";
import { addEnemyBoardListeners, updateMessages } from "./ui/gameUI.js";
import "./style.css";

// Lógica de juego
const player = new Player("Manuel");
const computer = new Computer();

// Coloca algunos barcos para pruebas
player.gameboard.placeShip(0, 0, new Ship(3), "horizontal");
computer.gameboard.placeShip(2, 2, new Ship(2), "vertical");

// Renderiza los tableros
renderBoard(player.gameboard, "player-board", true);
renderBoard(computer.gameboard, "computer-board", false);

// Mensaje inicial
updateMessages("Tu turno. Haz click en el tablero enemigo.");

// Agrega listeners de interacción
addEnemyBoardListeners(player, computer, renderBoard, updateMessages);

// Si quieres reiniciar el juego:
document.getElementById("restart-btn").addEventListener("click", () => {
  window.location.reload();
});
