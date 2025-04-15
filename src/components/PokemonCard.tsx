import React from "react";
import type { PokemonCardData } from "../types/Pokemon";

type PokemonCardProps = {
  pokemon: PokemonCardData;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="card p-2 rounded-1 bg-pokemon-card-border">
      <div
        className="bg-pokemon-card ratio d-flex justify-content-center align-items-center p-3"
        style={{ "--bs-aspect-ratio": "90%" } as React.CSSProperties}
      >
        <img
          alt={`Image of ${pokemon.name}`}
          src={pokemon.imageUrl}
          className="bg-pokemon-card px-4 py-3"
        />
      </div>
      <div className="card-body pb-2 px-0">
        <h3 className="card-title h5 fs-6 fw-bold">{pokemon.name}</h3>
      </div>
    </div>
  );
}
