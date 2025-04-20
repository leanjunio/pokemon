import { useParams, Navigate } from 'react-router'
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
  const { name } = useParams()

  if (!name) {
    return <Navigate to="/" />
  }

  const pokemon = useQueryData<PokemonDetailsResponse>('pokemon-detail', name)

  if (!pokemon) {
    return <Navigate to="/" />
  }

  const { height, weight, base_experience, abilities } = pokemon

  const allStats = combineStats(pokemon.stats, {
    height,
    weight,
    base_experience,
  })

  const formattedStats = getLocalizedStats(allStats)

  return (
    <div className="my-5">
      <Breadcrumb />
      <div className="row justify-content-between">
        <div className="col-12 col-lg-7 text-sm-center text-lg-start">
          <PokemonImage altText={pokemon.name} imageUrl={pokemon.sprites.other['official-artwork'].front_default} />
        </div>
        <div className="col-12 col-lg-5">
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
