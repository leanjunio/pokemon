import { useState } from 'react'
import Pagination from '../components/common/Pagination'
import SearchPokemon from '../components/pokemon/SearchPokemon'
import { useFilteredPokemon } from '../hooks/useFilteredPokemon'
import PokemonList from '../components/pokemon/PokemonList'

export default function PokemonController() {
  const [search, setSearch] = useState('')
  const { isLoading, isError, pokemon, onPageChange, currentPage, pageNumbers } = useFilteredPokemon(search)

  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <SearchPokemon onSearch={setSearch} />
      <PokemonList isLoading={isLoading} pokemon={pokemon} />
      <Pagination currentPage={currentPage} onPageChange={onPageChange} pageNumbers={pageNumbers} />
    </>
  )
}
