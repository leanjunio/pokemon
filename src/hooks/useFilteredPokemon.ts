import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo } from "react";
import { PokemonCardData, PokemonUrls } from "../types/Pokemon";

const fetchPokemonList = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=1302"
  );
  return data.results;
};

const fetchPokemonDetails = async (url: string) => {
  const {
    data: { id, sprites, name, types, abilities, stats },
  } = await axios.get(url);

  return {
    id,
    imageUrl: sprites.other["official-artwork"].front_default,
    name,
    types,
    abilities,
    stats,
  };
};

export function useFilteredPokemon(search: string) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: pokemonList,
    isLoading: isLoadingPokemonList,
    isError: isErrorPokemonList,
  } = useQuery<PokemonUrls[]>({
    queryKey: ["pokemon-list"],
    queryFn: fetchPokemonList,
    staleTime: Infinity,
  });

  const filteredResults = pokemonList?.filter((pokemon: PokemonUrls) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedResults =
    filteredResults?.slice((currentPage - 1) * 16, currentPage * 16) ?? [];

  const totalPages = Math.ceil((filteredResults?.length ?? 0) / 16);

  // TODO: Add pagination to the results

  const pokemonDetailsQueries = useQueries({
    queries:
      paginatedResults?.map((pokemon: PokemonUrls) => ({
        queryKey: ["pokemon-detail", pokemon.url],
        queryFn: () => fetchPokemonDetails(pokemon.url),
      })) ?? [],
    combine: (results) => {
      const allSuccessful = results.every((r) => r.isSuccess);

      return {
        isLoading: results.some((r) => r.isPending),
        isSuccess: allSuccessful,
        isError: results.some((r) => r.isError),
        data: allSuccessful ? results.map((r) => r.data) : undefined,
      };
    },
  });

  return {
    isLoading: isLoadingPokemonList || pokemonDetailsQueries.isLoading,
    isError: isErrorPokemonList || pokemonDetailsQueries.isError,
    isSuccess: pokemonDetailsQueries.isSuccess,
    pokemon: pokemonDetailsQueries.data,
    onPageChange: setCurrentPage,
    currentPage,
  };
}
