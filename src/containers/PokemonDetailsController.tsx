import { useParams } from 'react-router'
import { API_CONFIG } from '../lib/constants'
import { PokemonDetailsResponse } from '../types/Pokemon'
import { useQueryData } from '../hooks/useQueryData'
import PokemonImage from '../components/pokemon/PokemonImage'
import BasicInfo from '../components/pokemon/BasicInfo'
export default function PokemonDetailsController() {
  const { id } = useParams()
  const pokemonUrl = `${API_CONFIG.BASE_URL}/pokemon/${id}/`
  const pokemon = useQueryData<PokemonDetailsResponse>('pokemon-detail', pokemonUrl)
  console.log({ pokemon })

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <div className="container">
      <div className="row gap-5">
        <div className="col">
          <PokemonImage altText={pokemon.name} imageUrl={pokemon.sprites.other['official-artwork'].front_default} />
        </div>
        <div className="col">
          <BasicInfo id={pokemon.id} name={pokemon.name} types={pokemon.types} />
        </div>
      </div>
    </div>
  )
}
