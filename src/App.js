import Header from "./components/Header";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import SearchForm from "./components/SearchForm";
import CharactersProvider from './context/CharactersContext';
import Results from "./components/Results";

function App() {
  return (
    <CharactersProvider>
      <Header />
      <main>
        <div className="container">
        <SearchForm />
        <Results />
        </div>
      </main>
    </CharactersProvider>
  );
}

export default App;
