import { getHeroeById, getHeroesByOwner } from "../../src/funciones/05-imp-exp";

describe("testing 05-imp-exp", () => {
  test("getHeroeById must return heroe by id", () => {
    const id = 4;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 4, name: "Flash", owner: "DC" });
  });

  test("getHeroeById must return undefined if the id does not exist", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner must return heroes DC. Length = 3", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    // const arrayHeroesDC = [
    //   { id: 1, name: "Batman", owner: "DC" },
    //   { id: 3, name: "Superman", owner: "DC" },
    //   { id: 4, name: "Flash", owner: "DC" },
    // ];
    // expect(heroes).toEqual(arrayHeroesDC);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
  });

  test("getHeroesByOwner must return heroes Marvel. Length = 2", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((hero) => hero.owner === owner));
  });
});
