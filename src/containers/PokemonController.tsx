import { useState } from "react";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import SearchPokemon from "../components/SearchPokemon";
import { useFilteredPokemon } from "../hooks/useFilteredPokemon";

export default function PokemonController() {
  const [search, setSearch] = useState("");
  const { isLoading, isError, pokemon, onPageChange, currentPage } =
    useFilteredPokemon(search);

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <SearchPokemon onSearch={setSearch} />
      <PokemonList isLoading={isLoading} pokemon={pokemon} />
      <Pagination currentPage={currentPage} onPageChange={onPageChange} />
    </>
  );
}
