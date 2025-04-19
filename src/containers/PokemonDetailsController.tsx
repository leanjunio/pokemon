import { useParams } from 'react-router'
import { API_CONFIG } from '../lib/constants'
import { PokemonDetailsResponse } from '../types/Pokemon'
import { useQueryData } from '../hooks/useQueryData'
import PokemonImage from '../components/pokemon/PokemonImage'
import BasicInfo from '../components/pokemon/BasicInfo'
import Stats from '../components/pokemon/Stats'
import { extractStats } from '../pokemon/transformation'
import { localizedStats } from '../pokemon/localization/stats'

export default function PokemonDetailsController() {
  const { id } = useParams()
  const pokemonUrl = `${API_CONFIG.BASE_URL}/pokemon/${id}/`
  const pokemon = useQueryData<PokemonDetailsResponse>('pokemon-detail', pokemonUrl)

  if (!pokemon) {
    return <div>Loading...</div>
  }

  const stats = extractStats(pokemon.stats)

  const allStats = [
    ...stats,
    { name: 'height', value: pokemon.height },
    { name: 'weight', value: pokemon.weight },
    { name: 'base_experience', value: pokemon.base_experience },
  ]

  const formattedStats = allStats.map((stat) => ({
    name: localizedStats[stat.name],
    value: stat.value,
  }))

  return (
    <div className="container">
      <div className="row gap-5">
        <div className="col">
          <PokemonImage altText={pokemon.name} imageUrl={pokemon.sprites.other['official-artwork'].front_default} />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <BasicInfo id={pokemon.id} name={pokemon.name} types={pokemon.types} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Stats stats={formattedStats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
