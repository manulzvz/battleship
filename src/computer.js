import Player from "./player";

class Computer extends Player {
  constructor() {
    super("Computer");
  }

  computerAttack(enemyBoard) {
    let x, y, alreadyAttacked;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      alreadyAttacked = enemyBoard.attacks.some(a => a.x === x && a.y === y);
    } while (alreadyAttacked);
    enemyBoard.attack(x, y);
  }
}

export default Computer;
