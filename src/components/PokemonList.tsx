import React from "react";
import { PokemonCardData } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

type PokemonListProps = {
  pokemon: PokemonCardData[];
};

export default function PokemonList({ pokemon }: PokemonListProps) {
  return (
    <ul className="row row-cols-4 g-4 list-unstyled">
      {pokemon.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
}
