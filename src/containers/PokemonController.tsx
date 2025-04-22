import { useState } from 'react'
import Pagination from '@/components/common/Pagination/Pagination'
import SearchPokemon from '@/components/pokemon/SearchPokemon'
import { useFilteredPokemon } from '@/hooks/useFilteredPokemon'
import PokemonList from '@/components/pokemon/PokemonList'
import useDebounce from '@/hooks/useDebounce'
import { POKEMON_CONFIG } from '@/lib/constants'

export default function PokemonController() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, POKEMON_CONFIG.DEBOUNCE_TIME)
  const { isLoading, pokemon, onPageChange, currentPage, navigation, isPending } = useFilteredPokemon(debouncedSearch)

  return (
    <>
      <SearchPokemon isDisabled={isPending} onSearch={setSearch} />
      <PokemonList isLoading={isLoading} pokemon={pokemon} />
      <Pagination
        isDisabled={pokemon?.length === 0}
        currentPage={currentPage}
        onPageChange={onPageChange}
        navigation={navigation}
      />
    </>
  )
}
