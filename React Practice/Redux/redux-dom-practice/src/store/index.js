// Basic set up separating redux code from react code
import reducer from './reducer';
import { createStore } from 'redux';

const store = createStore(reducer)

export default store;
