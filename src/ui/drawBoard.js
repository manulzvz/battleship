function renderBoard(board, containerId, isPlayer = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Limpia el tablero anterior

    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.x = x;
            cell.dataset.y = y;  // Si es el tablero del jugador y hay un barco, muéstralo
            if (isPlayer && board.array[y][x] !== 0) {
                cell.classList.add("ship");
            }

            // Si la celda fue atacada, muestra el resultado
            const attack = board.attacks.find(a => a.x === x && a.y === y);
            if (attack) {
                if (attack.result === "hit") {
                    cell.classList.add("hit");
                } else if (attack.result === "miss") {
                    cell.classList.add("miss");
                }
            }
            container.appendChild(cell);
        }
    }
}

export default renderBoard;