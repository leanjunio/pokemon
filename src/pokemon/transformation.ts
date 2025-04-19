import { PokemonDetailsResponse } from '@/types/Pokemon'

export const transformPokemonDetails = (data: PokemonDetailsResponse) => ({
  id: data.id,
  imageUrl: data.sprites.other['official-artwork'].front_default,
  name: data.name,
  types: data.types,
  abilities: data.abilities,
  stats: data.stats,
})

/**
 * Extract the stats of a pokemon for easier consumption
 *
 * The shape of the stats is:
 * {
 *   stat: {
 *     name: string
 *   }
 *   base_stat: number
 * }
 * @param stats - The stats of a pokemon
 * @returns The extracted stats
 */
function extractStats(stats: PokemonDetailsResponse['stats']) {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }))
}

/**
 * Combine the stats of a pokemon with additional stats
 * @param stats - The stats of a pokemon
 * @param additionalStats - The additional stats to combine with the pokemon stats
 * @returns The combined stats
 */
export function combineStats(stats: PokemonDetailsResponse['stats'], additionalStats: Record<string, number>) {
  const allStats = [
    ...extractStats(stats),
    ...Object.entries(additionalStats).map(([name, value]) => ({
      name,
      value,
    })),
  ]

  return allStats
}
