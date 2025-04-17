import { useParams } from 'react-router'
import { API_CONFIG } from '../lib/constants'
import { PokemonCardData } from '../types/Pokemon'
import { useQueryData } from '../hooks/useQueryData'

export default function PokemonDetailsController() {
  const { id } = useParams()
  const pokemonUrl = `${API_CONFIG.BASE_URL}/pokemon/${id}/`
  const pokemon = useQueryData<PokemonCardData>('pokemon-detail', pokemonUrl)

  return <div>PokemonDetailsController</div>
}
