import PokeItem from "./PokeItem";

export default function PokemonGrid({ pokemonFiltered }) {
  return (
    <div>
      {pokemonFiltered.map((poke) => (
        <PokeItem key={poke.id} poke={poke} />
      ))}
    </div>
  );
}
