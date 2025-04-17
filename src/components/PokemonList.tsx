import React from 'react'
import { PokemonCardData } from '../types/Pokemon'
import PokemonCard from './PokemonCard'
import LoadingSpinner from './LoadingSpinner'

type PokemonListProps = {
  pokemon?: PokemonCardData[]
  isLoading: boolean
}

export default function PokemonList({ pokemon, isLoading }: PokemonListProps) {
  if (isLoading || !pokemon) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <ul className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 list-unstyled">
      {pokemon.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  )
}
