export const localizedStats: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defence',
  'special-attack': 'Special Attack',
  'special-defense': 'Special Defence',
  speed: 'Speed',
  height: 'Height',
  weight: 'Weight',
  base_experience: 'Base Experience',
}

/**
 * Localize the stats of a pokemon
 *
 * @param stats - The stats of a pokemon
 * @returns The localized stats
 */
export function getLocalizedStats(stats: { name: string; value: number }[]) {
  return stats.map((stat) => ({
    name: localizedStats[stat.name],
    value: stat.value,
  }))
}
