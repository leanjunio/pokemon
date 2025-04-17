import React from 'react'
import { PokemonDetailsResponse } from '../../types/Pokemon'

type StatsProps = {
  stats: PokemonDetailsResponse['stats']
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="p-3 row row-cols-2 bg-stats">
      {stats.map((stat) => (
        <div className="col d-flex" key={stat.stat.name}>
          <p className="fw-bold mb-0 me-2">{stat.stat.name}:</p>
          <p className="mb-0">{stat.base_stat}</p>
        </div>
      ))}
    </div>
  )
}
