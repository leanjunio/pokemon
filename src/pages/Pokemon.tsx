import Page from '@/components/common/Page'
import PokemonDetailsController from '@/containers/PokemonDetailsController'

export default function Pokemon() {
  return (
    <Page bgVariant="details">
      <PokemonDetailsController />
    </Page>
  )
}
