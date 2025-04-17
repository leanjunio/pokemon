import { PokemonCardData } from '../../types/Pokemon'
import PokemonCard from './PokemonCard'
import LoadingSpinner from '../common/LoadingSpinner'
import List from '../common/List'

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

  return <List<PokemonCardData> items={pokemon} listItem={(pokemon) => <PokemonCard pokemon={pokemon} />} />
}
