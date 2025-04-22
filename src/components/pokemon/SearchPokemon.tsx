import Search from '@/components/common/Search'

type SearchPokemonProps = {
  onSearch: (search: string) => void
  isDisabled: boolean
}

export default function SearchPokemon({ onSearch, isDisabled }: SearchPokemonProps) {
  return <Search name="pokemon-name" placeholder="Search" onSearch={onSearch} isDisabled={isDisabled} />
}
