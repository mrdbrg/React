import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggle from './Toggle';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import FormHooksRefactor from './FormHooksRefactor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Change state</h1>
      <CounterClass />
      <CounterHooks />
      <hr/>
      <div>
        <h1>Toggle</h1>
        <Toggle />
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
      <hr/>
      <div>
        <h1>Forms</h1>
        <h2>Class</h2>
        <SimpleFormClass />
        <h2>Hooks</h2>
        <SimpleFormHooks />
        <FormHooksRefactor />
      </div>
      <hr/>
    </div>
  );
}

export default App;
