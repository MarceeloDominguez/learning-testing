import { getSaludo } from "../../src/funciones/01-string";

describe("Testing 01-string", () => {
  test('getSaludo must return "Hola marcelo"', () => {
    const name = "Marcelo";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
