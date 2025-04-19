import { pokemonApi } from '@/api/pokemon'
import { PokemonUrls } from '@/types/Pokemon'
import { useGetList } from '@/hooks/useGetList'
import { QUERY_CONFIG } from '@/lib/constants'

export function usePokemonList() {
  return useGetList<PokemonUrls>('pokemon-list', pokemonApi.getPokemonList, QUERY_CONFIG.list.STALE_TIME)
}
