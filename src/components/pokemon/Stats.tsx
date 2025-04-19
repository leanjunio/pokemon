import React from 'react'

type StatsProps = {
  stats: { name: string; value: number }[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="p-3 row row-cols-2 bg-stats w-100 mx-auto">
      {stats.map((stat) => (
        <div className="col d-flex" key={stat.name}>
          <p className="fw-bold mb-0 me-2">{stat.name}:</p>
          <p className="mb-0 pokemon-text-dark">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
