export function addEnemyBoardListeners(player, computer, renderBoard, updateMessages) {
  const enemyBoard = document.getElementById("computer-board");
  const cells = enemyBoard.querySelectorAll(".cell");

  // Limpia todos los listeners previos reemplazando las celdas por clones
  cells.forEach(cell => {
    const newCell = cell.cloneNode(true);
    cell.parentNode.replaceChild(newCell, cell);
  });

  // Selecciona las celdas frescas después de limpiar
  const freshCells = enemyBoard.querySelectorAll(".cell");

  freshCells.forEach(cell => {
    cell.addEventListener("click", function handleClick() {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);

      // Evita atacar la misma celda dos veces
      if (computer.gameboard.attacks.some(a => a.x === x && a.y === y)) return;

      // Turno del jugador
      player.playerAttack(x, y, computer.gameboard);
      renderBoard(computer.gameboard, "computer-board", false);
      renderBoard(player.gameboard, "player-board", true);

      // Mensaje de acierto/fallo
      const lastAttack = computer.gameboard.attacks.at(-1);
      if (lastAttack && lastAttack.x === x && lastAttack.y === y) {
        updateMessages(lastAttack.result === "hit" ? "¡Acierto!" : "¡Fallaste!");
      }

      // ¿Ganó el jugador?
      if (computer.gameboard.allSunk()) {
        updateMessages("¡Ganaste!");
        // No vuelvas a agregar listeners
        return;
      }

      // Turno de la computadora
      updateMessages("Turno de la computadora...");

      // Desactiva clicks temporalmente (no con pointer-events, sino porque no hay listeners)
      // Espera el turno de la computadora
      setTimeout(() => {
        computer.computerAttack(player.gameboard);
        renderBoard(player.gameboard, "player-board", true);

        if (player.gameboard.allSunk()) {
          updateMessages("La computadora ganó.");
          // No vuelvas a agregar listeners
        } else {
          updateMessages("Tu turno. Haz click en el tablero enemigo.");
          // Vuelve a agregar los listeners para el siguiente turno
          addEnemyBoardListeners(player, computer, renderBoard, updateMessages);
        }
      }, 600);

      // Elimina el listener de esta celda para evitar doble click en el mismo turno
      cell.removeEventListener("click", handleClick);
    });
  });
}

export function updateMessages(msg) {
  document.getElementById("game-messages").textContent = msg;
}
