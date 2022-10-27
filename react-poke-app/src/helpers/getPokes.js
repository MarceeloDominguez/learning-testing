export const getPokes = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1200");
  const data = await response.json();

  const newPokemonList = data.results.map(({ name, url }) => {
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 2];
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return { name, id, picture };
  });

  return newPokemonList;
};
