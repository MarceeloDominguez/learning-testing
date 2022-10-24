import { getImagen } from "../../src/funciones/07-async-await";

describe("Testing 07-async-await", () => {
  test("getImagen it should return an error if we dont have api key", async () => {
    const resp = await getImagen();

    expect(resp).toBe("No se encontro la imagen");
  });
});
