import MophiaGame from "../index";
import * as foo from "../dependency";

describe("MophiaGame", () => {
  const find = foo.find;

  it("should use a mocked find function", async () => {
    Object.defineProperty(foo, "find", {
      value: jest.fn(async () => {
        return [{ name: "Jake", gangAffiliation: true }];
      })
    });
    const mg = new MophiaGame();
    const result = await mg.findMophia();
    expect(result[0].name).toBe("Jake");
    Object.defineProperty(foo, "find", { value: find });
  });

  it("should use the original find function", async () => {
    const mg = new MophiaGame();
    const result = await mg.findMophia();
    expect(result[0].name).toBe("Jake");
  });
});
