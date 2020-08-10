import React, { useEffect } from 'react';
import PokemonMap from './PokemonMap';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getWeather } from '../api';
import Header from './Header';
import PokemonList from './PokemonList';
import { SET_POKEMONS, SET_POSITION, SET_WEATHER } from '../store/types';

const App = () => {

  const icon = useSelector(state => state.user.weather.icon)
  const position = useSelector(state => state.user.position)
  const positionLoaded = useSelector(state => state.user.positionLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    // ====================================================================
    // React Hook useEffect missing message: any variables created in your 
    // function and used inside the useEffect need to be inside the array 
    // as a second argument. 
    // ====================================================================
 
    // get user's location (lat/lng)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        // console.log(pos.coords)
        dispatch({ type: SET_POSITION, payload: [latitude, longitude]})
      },
      (err) => {
        console.err(err)
      }
    );
    // get the pokemon from the server
    getPokemons()
    .then(pokemons => dispatch({ type: SET_POKEMONS, payload: pokemons }))
  }, [dispatch])

  useEffect(() => {
    // check if position was loaded and boolean is true
    if (positionLoaded) {
      const [lat, lng] = position
      // console.log("LOADED:", lat, lng)
      // fetch weather
      getWeather(lat, lng)
      .then(weatherData => dispatch({ type: SET_WEATHER, payload: weatherData }))

     } 
  }, [position, positionLoaded])

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
