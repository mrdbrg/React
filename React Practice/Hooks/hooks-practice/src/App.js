import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggle from './Toggle';
import SimpleFormClass from './SimpleFormClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <div>
        <Toggle />
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
      <SimpleFormClass />
    </div>
  );
}

export default App;
