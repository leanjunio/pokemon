import { PokemonUrls } from '@/types/Pokemon'
import { useCallback, useMemo } from 'react'

/**
 * Hook to sort a list of Pokemon URLs by name
 * @param pokemonList - The list of Pokemon URLs to sort
 * @param sortBy - The direction to sort the list
 * @returns The sorted list of Pokemon URLs
 */
export function useSortPokemon(pokemonList: PokemonUrls[], sortBy: 'asc' | 'desc') {
  const memoizedCompareFunction = useCallback(
    (a: PokemonUrls, b: PokemonUrls) => {
      if (sortBy === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    },
    [sortBy],
  )

  const sortedPokemonList = useMemo(() => {
    return [...pokemonList].sort(memoizedCompareFunction)
  }, [pokemonList, memoizedCompareFunction])

  return sortedPokemonList
}
