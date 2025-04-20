import Page from '@/components/common/Page'
import PokemonController from '@/containers/PokemonController'

export default function Browse() {
  return (
    <Page className="container-xl" bgVariant="list">
      <PokemonController />
    </Page>
  )
}
