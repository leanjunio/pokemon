import Page from '../components/common/Page'
import PokemonController from '../containers/PokemonController'

export default function Browse() {
  return (
    <Page bgVariant="list">
      <PokemonController />
    </Page>
  )
}
