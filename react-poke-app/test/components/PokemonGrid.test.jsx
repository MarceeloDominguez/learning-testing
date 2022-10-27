import { render, screen } from "@testing-library/react";
import PokemonGrid from "../../src/components/PokemonGrid";
import { usePokemons } from "../../src/hooks/usePokemons";

jest.mock("../../src/hooks/usePokemons");

describe("Testing <PokemonGrid />", () => {
  const pokemonFiltered = [
    {
      name: "Pikachu",
      id: "1",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Pikachu 2",
      id: "2",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  ];

  test("should display the search result", () => {
    const pokemon = [
      {
        id: "1",
        name: "Pikachu",
        picture: "url",
      },
      {
        id: "2",
        name: "Pikachu 2",
        picture: "url",
      },
    ];

    usePokemons.mockReturnValue({
      pokemon: pokemon,
    });

    render(<PokemonGrid pokemonFiltered={pokemonFiltered} />);

    screen.debug;

    //expect(screen.getAllByRole("img").length).toBe(2);
    expect(screen.getAllByRole("heading", { level: 1 }).length).toBe(2);
  });
});
