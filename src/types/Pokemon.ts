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
  types: string[]
  abilities: string[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
}
