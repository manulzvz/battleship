class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
  }

  hit() {
    this.damage += 1;
  }

  isSunk() {
    if (this.damage < this.length) {
      return false;
    } else {
      return true;
    }
  }
}

export default Ship;
