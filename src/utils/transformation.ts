import { PokemonDetailsResponse } from '../types/Pokemon'

export const transformPokemonDetails = (data: PokemonDetailsResponse) => ({
  id: data.id,
  imageUrl: data.sprites.other['official-artwork'].front_default,
  name: data.name,
  types: data.types,
  abilities: data.abilities,
  stats: data.stats,
})
