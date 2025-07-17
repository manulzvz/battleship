import Gameboard from "../src/gameboard";
import Ship from "../src/ship";

describe("Gameboard", () => {
  test("Put a ship on specific coordinates", () => {
    const gameboard = new Gameboard();
    const nShip = new Ship(3);
    gameboard.placeShip(2, 3, nShip, "horizontal");
    expect(gameboard.hasShipAt(2, 3)).toBe(true);
  });

  test("Register an attack and call hit() on a ship", () => {
    const gameboard = new Gameboard();
    const nShip = new Ship(3);
    gameboard.placeShip(2, 3, nShip, "horizontal");
    gameboard.attack(2, 3);
    expect(nShip.damage).toBe(1);
  });

  test("Report if all ships are sunken", () => {
    const gameboard = new Gameboard();
    const nShip = new Ship(3);
    const mShip = new Ship(2);
    const lShip = new Ship(1);

    gameboard.placeShip(2, 3, nShip);
    gameboard.placeShip(3, 3, mShip);
    gameboard.placeShip(4, 3, lShip);

    nShip.hit();
    nShip.hit();
    nShip.hit();

    mShip.hit();
    mShip.hit();

    lShip.hit();
    expect(gameboard.allSunk()).toBe(true);
  });
});
