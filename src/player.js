import Gameboard from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard;
    }

    playerAttack(x,y, enemyBoard) {
        enemyBoard.attack(x,y);
    }
}

export default Player;