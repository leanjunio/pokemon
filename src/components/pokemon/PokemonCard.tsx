import type { PokemonCardData } from '@/types/Pokemon'
import CardLinkWithImage from '@/components/common/CardLinkWithImage'
import { capitalize } from '@/utils/string'

type PokemonCardProps = {
  pokemon: PokemonCardData
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <CardLinkWithImage
      text={capitalize(pokemon.name)}
      imageUrl={pokemon.imageUrl}
      altText={`Image of ${pokemon.name}`}
      to={`/${pokemon.name}`}
    />
  )
}
