import { SET_POKEMONS, SET_POSITION, SET_WEATHER } from './types'

const defaultState = {
  weather: { temperature: 85, temperatureUnit: "F", shortForecast: "Sunny", icon: "☀️" },
  position: [40.7008739, -73.9875141],
  positionLoaded: false,
  pokemons: []
}

const reducer = (state = defaultState, action) => {
  // console.log(action)
  switch(action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload
      }
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
        positionLoaded: true
      }
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload
      }
    default: 
      return state
  }
}

export default reducer;