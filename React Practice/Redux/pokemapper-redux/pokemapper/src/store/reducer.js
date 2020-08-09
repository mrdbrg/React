import { SET_POKEMONS } from './types'

const defaultState = {
  weather: { temperature: 85, temperatureUnit: "F", shortForecast: "Sunny", icon: "☀️" },
  position: [40.7008739, -73.9875141],
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
    default: 
      return state
  }
}

export default reducer;