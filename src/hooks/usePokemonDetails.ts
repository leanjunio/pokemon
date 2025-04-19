import { useQueries } from '@tanstack/react-query'
import { PokemonUrls } from '@/types/Pokemon'
import { pokemonApi } from '@/api/pokemon'
import { transformPokemonDetails } from '@/pokemon/transformation'

export function usePokemonDetails(pokemonUrls: PokemonUrls[]) {
  const detailsQueries = pokemonUrls.map((pokemon) => ({
    queryKey: ['pokemon-detail', pokemon.name],
    queryFn: () => pokemonApi.getPokemonDetails(pokemon.url),
    staleTime: Infinity,
    select: transformPokemonDetails,
  }))

  return useQueries({
    queries: detailsQueries ?? [],
    combine: (results) => ({
      isLoading: results.some((r) => r.isPending),
      isSuccess: results.every((r) => r.isSuccess),
      isError: results.some((r) => r.isError),
      data: results.every((r) => r.isSuccess) ? results.map((r) => r.data) : undefined,
    }),
  })
}
