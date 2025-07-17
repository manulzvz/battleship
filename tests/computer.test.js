import Computer from "../src/computer";
import Player from "../src/player";

describe("Computer", () => {
    test("Computer has the name 'Computer' ", () => {
        const computer = new Computer();
        expect(computer.name).toBe("Computer");
    })

    test("Computer has a gameboard", () => {
        const computer = new Computer();
        expect(computer.gameboard).not.toBeNull();
    });

    test("Computer can attack a valid coordinate", () => {
        const computer = new Computer();
        const player = new Player("Manuel");
        computer.computerAttack(player.gameboard);
        expect(player.gameboard.attacks.length).toBe(1);
    });

    test("Computer does not repeat attacks", () => {
        const computer = new Computer();
        const player = new Player("Manuel");
        for(let i = 0; i < 5; i ++){
            computer.computerAttack(player.gameboard);
        }
        const uniqueAttacks= new Set(player.gameboard.attacks.map(a => `${a.x},${a.y}`));
        expect(uniqueAttacks.size).toBe(player.gameboard.attacks.length);
    });
})