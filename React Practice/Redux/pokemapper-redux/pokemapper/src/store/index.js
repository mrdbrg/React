import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store;