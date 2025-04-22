import { useEffect, useState } from 'react'
import { usePagination } from '@/hooks/usePagination'
import { usePokemonDetails } from '@/hooks/usePokemonDetails'
import { usePokemonList } from '@/hooks/usePokemonList'
import { filterBySearchedName } from '@/utils/search'
import { POKEMON_CONFIG } from '@/lib/constants'
import { useSortPokemon } from '@/hooks/useSortPokemon'

/**
 * Hook to filter pokemon results based on the provided search query
 * @param search - The search query
 * @returns The filtered and paginated pokemon results
 */
export function useFilteredPokemon(search: string) {
  const [currentPage, setCurrentPage] = useState(POKEMON_CONFIG.DEFAULT_PAGE as number)

  useEffect(() => {
    setCurrentPage(POKEMON_CONFIG.DEFAULT_PAGE)
  }, [search])

  const {
    data: pokemonList = [],
    isLoading: isLoadingPokemonList,
    isError: isErrorPokemonList,
    isPending: isPendingPokemonList,
  } = usePokemonList()
  const sortedPokemonList = useSortPokemon(pokemonList, POKEMON_CONFIG.DEFAULT_SORT_BY)
  const filteredResults = filterBySearchedName(sortedPokemonList, search)
  const { currentPageItems: currentPageResults, navigation } = usePagination(
    filteredResults,
    currentPage,
    setCurrentPage,
    POKEMON_CONFIG.MAX_VISIBLE_PAGES,
    POKEMON_CONFIG.ITEMS_PER_PAGE,
  )

  const {
    isLoading: isLoadingPokemonDetails,
    isError: isErrorPokemonDetails,
    isSuccess: isSuccessPokemonDetails,
    data: pokemonDetails,
  } = usePokemonDetails(currentPageResults)

  return {
    isPending: isPendingPokemonList,
    isLoading: isLoadingPokemonList || isLoadingPokemonDetails,
    isError: isErrorPokemonList || isErrorPokemonDetails,
    isSuccess: isSuccessPokemonDetails,
    pokemon: pokemonDetails,
    onPageChange: setCurrentPage,
    currentPage,
    navigation,
  }
}
