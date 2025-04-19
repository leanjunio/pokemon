import Search from '@/components/common/Search'

type SearchPokemonProps = {
  onSearch: (search: string) => void
}

export default function SearchPokemon({ onSearch }: SearchPokemonProps) {
  return <Search name="pokemon-name" placeholder="Search" onSearch={onSearch} />
}
