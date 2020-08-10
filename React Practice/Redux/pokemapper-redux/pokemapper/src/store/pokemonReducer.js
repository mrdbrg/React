import { SET_POKEMONS } from './types'

const defaultState = {
  pokemons: []
}

const reducer = (state = defaultState, action) => {
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