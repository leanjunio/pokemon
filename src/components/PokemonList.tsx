import React from "react";
import { PokemonCardData } from "../types/Pokemon";
import PokemonCard from "./PokemonCard";

type PokemonListProps = {
  pokemon?: PokemonCardData[];
  isLoading: boolean;
};

export default function PokemonList({ pokemon, isLoading }: PokemonListProps) {
  if (isLoading || !pokemon) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 list-unstyled">
      {pokemon.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
}
