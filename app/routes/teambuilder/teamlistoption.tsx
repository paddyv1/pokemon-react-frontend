import { PokemonClient } from "pokenode-ts"; // import the PokemonClient
import { useState } from "react";

export default function ListChoice() {
  const [pokemonName, UpdatePokemon] = useState<string | null>(null);

  const api = new PokemonClient(); // create a PokemonClient

  const res = api
    .getPokemonById(1)
    .then((res) => {
      UpdatePokemon(res.sprites.front_default);
    })
    .catch((error) => console.error(error));

  return (
    <>
      <section className="border h-45 rounded-3xl">
        <div className="flex justify-center">Team Name</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <div className="">
            <img src={pokemonName} />
          </div>
          <div>Sprite 2</div>
          <div>Sprite 3</div>
          <div>Sprite 4</div>
          <div>Sprite 5</div>
          <div>Sprite 6</div>
        </div>
      </section>
    </>
  );
}
