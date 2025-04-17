export const API_CONFIG = {
  BASE_URL: 'https://pokeapi.co/api/v2',
  ENDPOINTS: {
    POKEMON_LIST: '/pokemon',
  },
} as const

export const POKEMON_CONFIG = {
  ITEMS_PER_PAGE: 16,
  MAX_VISIBLE_PAGES: 5,
  TOTAL_POKEMON: 1302,
} as const

export const QUERY_CONFIG = {
  list: {
    STALE_TIME: Infinity,
  },
} as const
