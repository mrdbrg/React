import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {

  const pokemons = useSelector(state => state.pokemon.pokemons)

  console.log("POKEMONS OBJECT:", pokemons)
  // const { icon } = weather
  // console.log(icon)
  // console.log("WEATHER VALUES:", weather.temperature)

  return (
    <h4>weather</h4>
    // <div className="menu">
    //   <h1>PokeMapper</h1>
    //   <div className="weather">
    //     <h4>{weather.temperature}°F</h4>
    //     <span role="img" aria-label={weather.shortForecast}>{weather.icon}</span>
    //   </div>
    // </div>
  )
}

export default Header