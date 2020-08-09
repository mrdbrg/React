import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <Provide store={store}>
    <App />
  </Provide>,  
  document.getElementById('root')
);

