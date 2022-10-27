import { useEffect, useState } from "react";
import { getPokes } from "../helpers/getPokes";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const newPokemonList = await getPokes();
    setPokemons(newPokemonList);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return { pokemons };
};
