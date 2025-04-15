import "./App.css";
import Page from "./components/Page";
import PokemonList from "./components/PokemonList";
import SearchPokemon from "./components/SearchPokemon";
export default function App() {
  const pokemon = [
    {
      id: 1,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      name: "Bulbasaur",
    },
    {
      id: 2,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      name: "Ivysaur",
    },
    {
      id: 3,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      name: "Venusaur",
    },
    {
      id: 4,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      name: "Charmander",
    },
    {
      id: 5,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      name: "Charmeleon",
    },
    {
      id: 6,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      name: "Charizard",
    },
    {
      id: 7,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      name: "Squirtle",
    },
    {
      id: 8,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      name: "Wartortle",
    },
    {
      id: 9,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      name: "Blastoise",
    },
    {
      id: 10,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
      name: "Caterpie",
    },
    {
      id: 11,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      name: "Metapod",
    },
    {
      id: 12,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      name: "Butterfree",
    },
    {
      id: 13,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
      name: "Weedle",
    },
    {
      id: 14,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      name: "Kakuna",
    },
    {
      id: 15,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
      name: "Beedrill",
    },
    {
      id: 16,
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
      name: "Pidgey",
    },
  ];

  return (
    <Page bgVariant="list">
      <SearchPokemon />
      <PokemonList pokemon={pokemon} />
    </Page>
  );
}
