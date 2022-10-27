import { renderHook, waitFor } from "@testing-library/react";
import { usePokemons } from "../../src/hooks/usePokemons";

describe("Testing hook usePokemons()", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => usePokemons("Pikachu"));
    const { pokemons } = result.current;

    expect(pokemons.length).toBe(0);
  });

  test("should return an array of pokemons", async () => {
    const { result } = renderHook(() => usePokemons("Pikachu"));

    //espera a que esta condicion se cumpla. el resultado sea mayor a 0
    await waitFor(() =>
      expect(result.current.pokemons.length).toBeGreaterThan(0)
    );

    const { pokemons } = result.current;

    expect(pokemons.length).toBeGreaterThan(0);
  });
});
