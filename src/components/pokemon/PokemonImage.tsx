type PokemonImageProps = {
  altText: string
  imageUrl: string
}

export default function PokemonImage({ altText, imageUrl }: PokemonImageProps) {
  return <img alt={altText} src={imageUrl} className="bg-card px-4 py-5 mw-100" />
}
