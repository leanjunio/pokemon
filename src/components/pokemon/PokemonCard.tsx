import type { PokemonCardData } from '../../types/Pokemon'
import CardLink from '../common/CardLink'
import { capitalize } from '../../utils/string'

type PokemonCardProps = {
  pokemon: PokemonCardData
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <CardLink
      text={capitalize(pokemon.name)}
      imageUrl={pokemon.imageUrl}
      altText={`Image of ${pokemon.name}`}
      to={`/pokemon/${pokemon.id}`}
    />
  )
}
