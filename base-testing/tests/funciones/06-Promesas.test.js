import { getHeroeByIdAsync } from "../../src/funciones/06-promesas";

describe("Testing 06-Promesas", () => {
  test("getHeroeByIdAsync must return hero", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync should return an error if hero does not exist", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);

      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

      done();
    });
  });
});
