import Search from '../common/Search'

type SearchPokemonProps = {
  onSearch: (search: string) => void
}

export default function SearchPokemon({ onSearch }: SearchPokemonProps) {
  return <Search name="pokemon-name" placeholder="Search" onSearch={onSearch} />
}
