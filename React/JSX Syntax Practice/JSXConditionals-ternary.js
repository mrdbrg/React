// JSX Conditionals: Ternary Operator
import React from 'react';
import ReactDOM from 'react-dom';

function randomJobPicker() {
  return Math.floor(Math.random() * 3);
}

const webDev = {
  fullstackDev: 'Full Stack Engineering',
  frontendDev: 'Front-End Engineering',
  backendDev: 'Back-End Engineering'
};

const jobIs = (
  <h2>
    {webDev[randomJobPicker() === 1 ? "fullstackDev" : (randomJobPicker() === 2 ? "frontendDev" : "backendDev") ]}
  </h2>

);

ReactDOM.render(jobIs, document.getElementById('app'));
