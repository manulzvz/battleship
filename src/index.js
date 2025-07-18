import Player from "./game/player.js";
import Computer from "./game/computer.js";
import Ship from "./game/ship.js";
import renderBoard from "./ui/drawBoard.js";
import {
  addEnemyBoardListeners,
  updateMessages,
  disableEnemyBoard,
} from "./ui/gameUI.js";
import "./style.css";

// Variables globales para los jugadores
let player, computer;

// Inicialización y reinicio del juego
function setupGame() {
  player = new Player("Manuel");
  computer = new Computer();

  // Coloca los barcos (puedes mejorar esto más adelante)
  player.gameboard.placeShip(0, 0, new Ship(3), "horizontal");
  computer.gameboard.placeShip(2, 2, new Ship(2), "vertical");

  // Renderiza los tableros
  renderBoard(player.gameboard, "player-board", true);
  renderBoard(computer.gameboard, "computer-board", false);

  // Mensaje inicial
  updateMessages("Tu turno. Haz click en el tablero enemigo.");

  // Habilita la interacción
  addEnemyBoardListeners(
    player,
    computer,
    renderBoard,
    updateMessages,
    setupGame
  );
}

// Listener del botón de reinicio
document.getElementById("restart-btn").addEventListener("click", () => {
  setupGame();
});

// Llama a setupGame al cargar la página
setupGame();
