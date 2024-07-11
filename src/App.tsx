import { useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import useAllPokemons from './hooks/useAllPokemons';
import { INITIAL_URL } from './global/global';
import LoadingPage from './components/loadingPage/LoadingPage';
import Pagenate from './components/pagination/Pagenate';

function App() {
  const { loading, PokemonData, count, loadNewPage } = useAllPokemons();

  useEffect(() => {
    const fetchPokemonData = async() => {
      await loadNewPage(INITIAL_URL);
    }
    fetchPokemonData();
  },[]);

  return (
    <>
      <Header/>
      {
        loading || loading === undefined ?
          <LoadingPage />
        :
        <>
          <div className="card-wrapper">
            {PokemonData.map(pokemon => (
              <Card pokemon={pokemon} key={pokemon.id}/>
            ))}
          </div>
        </>
      }
      <Pagenate count={count} loadNewPage={loadNewPage}/>
    </>
  )
}

export default App;
