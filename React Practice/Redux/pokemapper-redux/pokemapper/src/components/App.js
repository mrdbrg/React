import React from 'react';
import PokemonMap from './PokemonMap';
import Header from './Header';
import PokemonList from './PokemonList';

const App = () => {

  return (
    <div className={`App ${weather.icon}`}>
      <Header weather={weather}/>
      <main>
        <PokemonList pokemons={pokemons} />
        <PokemonMap pokemons={pokemons} position={position} icon={weather.icon}/>
      </main>
    </div>
  );
}

export default App
