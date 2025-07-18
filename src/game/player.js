import Gameboard from "./gameboard.js";

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
    }

    playerAttack(x,y, enemyBoard) {
        enemyBoard.attack(x,y);
    }
}

export default Player;