export type PokemonListResponse = {
  count: number
  next: string
  previous: string
  results: PokemonUrls[]
}

export type PokemonUrls = {
  name: string
  url: string
}

export type PokemonCardData = {
  id: number
  imageUrl: string
  name: string
}

export type PokemonDetailsResponse = {
  id: number
  imageUrl: string
  name: string
  types: {
    slot: number
    type: {
      name: string
    }
  }[]
  abilities: {
    ability: {
      name: string
    }
  }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: {
    base_stat: number
    stat: {
      name: string
    }
  }[]
  height: number
  weight: number
  base_experience: number
}
