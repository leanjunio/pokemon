import { PokemonListResponse, PokemonDetailsResponse } from '@/types/Pokemon'
import { createApiRequest } from '@/api/client'
import { API_CONFIG, POKEMON_CONFIG } from '@/lib/constants'

const PARAMS = {
  list: { limit: POKEMON_CONFIG.TOTAL_POKEMON },
}

export const pokemonApi = {
  /**
   * Fetches a list of all Pokemon with their basic information
   * @returns Promise<PokemonUrls[]> Array of Pokemon with name and url
   */
  getPokemonList: async () => {
    const response = await createApiRequest<PokemonListResponse>(API_CONFIG.ENDPOINTS.POKEMON_LIST, 'GET', PARAMS.list)
    return response.results
  },

  /**
   * Fetches detailed information for a specific Pokemon
   * @param url The full URL endpoint for the Pokemon details
   * @returns Promise<PokemonDetailsResponse> Detailed Pokemon data including stats, types, abilities etc.
   */
  getPokemonDetails: async (url: string) => {
    const response = await createApiRequest<PokemonDetailsResponse>(url, 'GET')
    return response
  },
}
