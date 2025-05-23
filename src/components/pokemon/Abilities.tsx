import { PokemonDetailsResponse } from '@/types/Pokemon'

type AbilitiesProps = {
  abilities: PokemonDetailsResponse['abilities']
}

export default function Abilities({ abilities }: AbilitiesProps) {
  return (
    <>
      <h3 className="fs-6 font-bold">Abilities</h3>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>
            <p className="m-0 pokemon-text-dark">{ability.ability.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
