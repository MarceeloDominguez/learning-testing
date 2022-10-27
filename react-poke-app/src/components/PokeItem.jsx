export default function PokeItem({ poke }) {
  return (
    <div>
      <h1>{poke.name}</h1>
      <span>#{poke.id}</span>
      <img src={poke.picture} alt={poke.name} />
    </div>
  );
}
