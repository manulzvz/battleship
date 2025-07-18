function addEnemyBoardListeners(player, computer, renderBoard, updateMessages) {
  const enemyBoard = document.getElementById("computer-board");
  const cells = enemyBoard.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.addEventListener("click", function handleClick() {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);

      if (computer.gameboard.attacks.some(a => a.x === x && a.y === y)) return;

      player.playerAttack(x, y, computer.gameboard);
      renderBoard(computer.gameboard, "computer-board", false);
      renderBoard(player.gameboard, "player-board", true);

      const lastAttack = computer.gameboard.attacks.at(-1);
      if (lastAttack && lastAttack.x === x && lastAttack.y === y) {
        if (lastAttack.result === "hit") {
          updateMessages("¡Acierto!");
        } else {
          updateMessages("¡Fallaste!");
        }
      }

      if (computer.gameboard.allSunk()) {
        updateMessages("¡Ganaste!");
        disableEnemyBoard();
        return;
      }

      updateMessages("Turno de la computadora...");
      setTimeout(() => {
        computer.computerAttack(player.gameboard);
        renderBoard(player.gameboard, "player-board", true);

        if (player.gameboard.allSunk()) {
          updateMessages("La computadora ganó.");
          disableEnemyBoard();
        } else {
          updateMessages("Tu turno. Haz click en el tablero enemigo.");
        }
      }, 600);

      cell.removeEventListener("click", handleClick);
    });
  });
}

function disableEnemyBoard() {
  const enemyBoard = document.getElementById("computer-board");
  const cells = enemyBoard.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.pointerEvents = "none";
  });
}

function updateMessages(msg) {
  document.getElementById("game-messages").textContent = msg;
}

// Exporta todas las funciones al final
export { addEnemyBoardListeners, disableEnemyBoard, updateMessages };
