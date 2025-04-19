import { useParams } from 'react-router'
import { API_CONFIG } from '@/lib/constants'
import { PokemonDetailsResponse } from '@/types/Pokemon'
import { useQueryData } from '@/hooks/useQueryData'
import PokemonImage from '@/components/pokemon/PokemonImage'
import BasicInfo from '@/components/pokemon/BasicInfo'
import Stats from '@/components/pokemon/Stats'
import { combineStats } from '@/pokemon/transformation'
import { getLocalizedStats } from '@/pokemon/localization/stats'
import Abilities from '@/components/pokemon/Abilities'
import Breadcrumb from '@/components/common/Breadcrumb'

export default function PokemonDetailsController() {
  const { id } = useParams()
  const pokemonUrl = `${API_CONFIG.BASE_URL}/pokemon/${id}/`
  const pokemon = useQueryData<PokemonDetailsResponse>('pokemon-detail', pokemonUrl)

  if (!pokemon) {
    return <div>Loading...</div>
  }

  const { height, weight, base_experience, abilities } = pokemon

  const allStats = combineStats(pokemon.stats, {
    height,
    weight,
    base_experience,
  })

  const formattedStats = getLocalizedStats(allStats)

  return (
    <div className="container">
      <Breadcrumb />
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
          <hr />
          <div className="row">
            <div className="col">
              <Stats stats={formattedStats} />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <Abilities abilities={abilities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
