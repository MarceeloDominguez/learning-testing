import { retornaArreglo } from "../../src/funciones/04-deses-arr";

describe("Testing 04-deses-arr", () => {
  test("retornaArreglo must return a string and a number = ['ABC', 123]", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
