import { getUser, getUsuarioActivo } from "../../src/funciones/02-funciones";

describe("Testing 02-funciones", () => {
  test("getUser must return object", () => {
    const testUser = {
      uid: "ABC123",
      username: "nickname",
    };

    const user = getUser();
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo must return object", () => {
    const name = "Marcelo";

    const user = getUsuarioActivo(name);

    const testUser = {
      uid: "ABC567",
      username: name,
    };

    expect(testUser).toStrictEqual(user);
  });
});
