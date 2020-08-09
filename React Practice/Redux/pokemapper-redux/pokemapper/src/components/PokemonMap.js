import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux';
import PokemonMarker from './PokemonMarker'

const maps = {
  "☀️": {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "❄️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "🌧": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
  "☁️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  },
}

const PokemonMap = () => {

  const { position, pokemons, icon } = useSelector(state => {
    return {
      position: state.position,
      pokemons: state.pokemons,
      icon: state.weather.icon
    }
  })

  const map = maps[icon] ? maps[icon] : maps["☀️"]
  
  return (
    <Map center={position} zoom={15} onClick={(mapClickEvent) => console.log(mapClickEvent)} style={{ height: "84vh" }}>
      <TileLayer url={map.url} attribution={map.attribution} />
      {pokemons.map((pokemon, index) => <PokemonMarker key={index} pokemon={pokemon} />)}
    </Map>
  )
}

export default PokemonMap
