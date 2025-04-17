import { PokemonListResponse, PokemonDetailsResponse } from '../types/Pokemon'
import { apiRequest } from './client'

const ENDPOINTS = {
  list: '/pokemon',
}

const PARAMS = {
  list: { limit: '1302' },
}

export const pokemonApi = {
  /**
   * Fetches a list of all Pokemon with their basic information
   * @returns Promise<PokemonUrls[]> Array of Pokemon with name and url
   */
  getPokemonList: async () => {
    const response = await apiRequest<PokemonListResponse>(ENDPOINTS.list, 'GET', PARAMS.list)
    return response.results
  },

  /**
   * Fetches detailed information for a specific Pokemon
   * @param url The full URL endpoint for the Pokemon details
   * @returns Promise<PokemonDetailsResponse> Detailed Pokemon data including stats, types, abilities etc.
   */
  getPokemonDetails: async (url: string) => {
    const response = await apiRequest<PokemonDetailsResponse>(url, 'GET')
    return response
  },
}
