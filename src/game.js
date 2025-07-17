// Importacion de clases
import Ship from "./ship.js";
import Player from "./player.js";
import Computer from "./computer.js";

// Importacion de readline
import readline from "readline";
// Configuracion de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funcion para pedir coordenadas
function askCoordinates() {
  return new Promise((resolve) => {
    rl.question("Ingresa las coordenadas con espacio (x y): ", (answer) => {
      //Separa la respuesta de x e y
      const [x, y] = answer.split(" ").map(Number);
      resolve({ x, y });
    });
  });
}

async function main() {
  // Crea los jugadores
  const player = new Player("Manuel");
  const computer = new Computer();

  // Inicializa los tableros con barcos
  // Barcos de player
  const shipOnePlayer = new Ship(1);
  const shipTwoPlayer = new Ship(1);
  // Barcos de computer
  const shipOneComputer = new Ship(1);
  const shipTwoComputer = new Ship(1);


  // Ubicar barcos en posiciones predeterminadas
  // Posiciones de barcos de player
  player.gameboard.placeShip(0, 0, shipOnePlayer, "horizontal");
  player.gameboard.placeShip(0, 1, shipTwoPlayer, "horizontal");
  // Posiciones de barcos de computer
  computer.gameboard.placeShip(0, 0, shipOneComputer, "horizontal");
  computer.gameboard.placeShip(0, 1, shipTwoComputer, "horizontal");
  
  // Flujo de juego
  let gameover = false;

  while (!gameover) {
    // Turno del jugador
    const { x, y } = await askCoordinates();
    player.playerAttack(x, y, computer.gameboard);
    console.log(`Jugador ataca (${x}, ${y})`);
    if (computer.gameboard.allSunk()) {
      console.log("Ganaste!");
      gameover = true;
      break;
    }

    // Turno de la computadora
    computer.computerAttack(player.gameboard);
    console.log("La computadora ataca.");
    if (player.gameboard.allSunk()) {
      console.log("La computadora gano!");
      gameover = true;
      break;
    }
  }

  rl.close();
}

main();
