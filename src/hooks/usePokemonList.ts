import { pokemonApi } from '@/api/pokemon'
import { PokemonUrls } from '@/types/Pokemon'
import { useGetList } from '@/hooks/useGetList'
import { QUERY_CONFIG } from '@/lib/constants'
import { NotFoundError } from '@/errors/api'
import { UseQueryOptions } from '@tanstack/react-query'

function shouldRetry(count: number, error: Error) {
  if (error instanceof NotFoundError) {
    return false
  }
  return true
}

export function usePokemonList() {
  const options: Partial<UseQueryOptions<PokemonUrls[], Error>> = {
    staleTime: QUERY_CONFIG.list.STALE_TIME,
    retry: shouldRetry,
  }

  return useGetList<PokemonUrls>('pokemon-list', pokemonApi.getPokemonList, options)
}
