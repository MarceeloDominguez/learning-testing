import { usContext } from "../../src/funciones/03-deses-obj";

describe("testing 03-deses-obj", () => {
  test("usContext", () => {
    const datosDeEntrada = {
      clave: "NICKNAME",
      edad: 10,
      firstName: "Marcelo",
    };

    const personaExpected = {
      nombreClave: datosDeEntrada.clave,
      anios: datosDeEntrada.edad,
      nombre: datosDeEntrada.firstName,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const userTest = usContext(datosDeEntrada);

    expect(userTest).toStrictEqual(personaExpected);
  });
});
