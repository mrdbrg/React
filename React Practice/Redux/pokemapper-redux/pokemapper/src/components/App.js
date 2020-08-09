import React, { useEffect } from 'react';
import PokemonMap from './PokemonMap';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../api';
import Header from './Header';
import PokemonList from './PokemonList';
import { SET_POKEMONS } from '../store/types';

const App = () => {

  const icon = useSelector(state => state.weather.icon)
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemons()
    .then(pokemons => dispatch({ type: SET_POKEMONS, payload: pokemons }))
  }, [])

  return (
    <div className={`App ${icon}`}>
      <Header />
      <main>
        <PokemonList />
        <PokemonMap />
      </main>
    </div>
  );
}

export default App;
