import { getPokes } from "../../src/helpers/getPokes";

describe("Testing getPokes()", () => {
  test("should return an array of pokemons", async () => {
    const pokemon = await getPokes("bulbasaur");
    expect(pokemon[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      picture: expect.any(String),
    });
  });
});
