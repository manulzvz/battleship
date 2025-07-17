class Gameboard {
  constructor() {
    this.array = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.ships = [];
    this.attacks = [];
  }

  placeShip(x, y, ship, orientation) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }

    if (orientation == "horizontal") {
      if (x + ship.length > 9) {
        return false;
      }
      //validacion
      for (let k = 0; k < ship.length; k++) {
        if (this.array[y][x + k] !== 0) return false;
      }
      //colocacion
      for (let k = 0; k < ship.length; k++) {
        this.array[y][x + k] = ship;
      }
      this.ships.push(ship);
      return true;
    } else if (orientation == "vertical") {
      if (y + ship.length > 9) {
        return false;
      }
      //validacion
      for (let k = 0; k < ship.length; k++) {
        if (this.array[y + k][x] !== 0) return false;
      }
      //colocacion
      for (let k = 0; k < ship.length; k++) {
        this.array[y + k][x] = ship;
      }
      this.ships.push(ship);
      return true;
    }
  }

  hasShipAt(x, y) {
    if (this.array[y][x] !== 0) return true;
    return false;
  }

  attack(x, y) {
    //verificacion de ataque previo en casilla
    for (let i = 0; i < this.attacks.length; i++) {
      if (this.attacks[i].x === x && this.attacks[i].y === y) return;
    }

    if (this.hasShipAt(x, y)) {
      const ship = this.array[y][x];
      ship.hit();
      this.attacks.push({ x, y, result: "hit" });
    } else {
      this.attacks.push({ x, y, result: "miss" });
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}

export default Gameboard;
