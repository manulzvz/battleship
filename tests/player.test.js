import Player from "../src/player";
import Gameboard from "../src/gameboard";

describe("Player", () => {
  test("Check created player name property", () => {
    const player = new Player("Manuel");
    expect(player.name).toBe("Manuel");
  });

  test("Check created player gameboard property", () => {
    const player = new Player("Manuel");
    expect(player.gameboard).toBeInstanceOf(Gameboard);
  });

  test("Validate player attack on enemy board", () => {
    const player = new Player("Manuel");
    const enemy = new Player("Enemy");
    player.playerAttack(3, 4, enemy.gameboard);
    expect(enemy.gameboard.attacks).toContainEqual({ x: 3, y: 4, result: expect.any(String) });
  });
});
