import Ship from "../src/ship";

describe("Ship", () => {
  test("add number of hits when hit() is called", () => {
    const nShip = new Ship(3);
    nShip.hit();
    expect(nShip.damage).toBe(1);
  });

  test("isSunk returns true when ship receives same number of hits as length", () => {
    const nShip = new Ship(3);
    nShip.hit();
    nShip.hit();
    nShip.hit();
    expect(nShip.isSunk()).toBe(true);
  });

  test("isSunk returns false when ship receives less number of hits as length", () => {
    const nShip = new Ship(3);
    nShip.hit();
    nShip.hit();
    expect(nShip.isSunk()).toBe(false);
  });
});
