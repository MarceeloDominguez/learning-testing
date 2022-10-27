import { useEffect, useState } from "react";
import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import SearchPokemon from "./components/SearchPokemon";
import { usePokemons } from "./hooks/usePokemons";

function App() {
  const { pokemons } = usePokemons();
  const [pokemonInputValue, setPokemonInputValue] = useState("");
  const [pokemonFiltered, setPokemonFiltered] = useState([]);

  const searchPokemon = (valueInput) => {
    setPokemonInputValue(valueInput);
  };

  useEffect(() => {
    if (isNaN(Number(pokemonInputValue))) {
      setPokemonFiltered(
        pokemons.filter((poke) =>
          poke.name
            .toLocaleLowerCase()
            .includes(pokemonInputValue.toLocaleLowerCase())
        )
      );
    } else {
      const pokeId = pokemons.find((poke) => poke.id === pokemonInputValue);
      setPokemonFiltered(pokeId ? [pokeId] : []);
    }
  }, [pokemonInputValue]);

  return (
    <div className="App">
      <h1>Buscar Pokemons</h1>

      <SearchPokemon
        searchPokemon={(inputValue) => searchPokemon(inputValue)}
      />

      <PokemonGrid pokemonFiltered={pokemonFiltered} />
    </div>
  );
}

export default App;
