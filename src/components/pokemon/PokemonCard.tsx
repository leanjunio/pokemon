import type { PokemonCardData } from '../../types/Pokemon'
import Card from '../common/Card'
import { capitalize } from '../../utils/string'

type PokemonCardProps = {
  pokemon: PokemonCardData
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return <Card text={capitalize(pokemon.name)} imageUrl={pokemon.imageUrl} altText={`Image of ${pokemon.name}`} />
}
