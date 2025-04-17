import { useEffect, useState } from 'react'
import { usePagination } from './usePagination'
import { usePokemonDetails } from './usePokemonDetails'
import { usePokemonList } from './usePokemonList'
import { filterBySearchedName } from '../utils/search'
import { POKEMON_CONFIG } from '../lib/constants'

/**
 * Hook to filter pokemon results based on the provided search query
 * @param search - The search query
 * @returns The filtered and paginated pokemon results
 */
export function useFilteredPokemon(search: string) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [search])

  const { data: pokemonList, isLoading: isLoadingPokemonList, isError: isErrorPokemonList } = usePokemonList()
  const filteredResults = filterBySearchedName(pokemonList, search)
  const { currentPageItems: currentPageResults, pageNumbers } = usePagination(
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
    isLoading: isLoadingPokemonList || isLoadingPokemonDetails,
    isError: isErrorPokemonList || isErrorPokemonDetails,
    isSuccess: isSuccessPokemonDetails,
    pokemon: pokemonDetails,
    onPageChange: setCurrentPage,
    currentPage,
    pageNumbers,
  }
}
