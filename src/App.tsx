import "./App.css";
import Page from "./components/Page";
import PokemonController from "./containers/PokemonController";

export default function App() {
  return (
    <Page bgVariant="list">
      <PokemonController />
    </Page>
  );
}
