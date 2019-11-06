// JSX Conditionals: if statements
import React from 'react';
import ReactDOM from 'react-dom';

let question;

if(client.shoes === expensive) {
  question = (
    <h1>
      Is there anything we could help you find, sir/ma'am ?
    </h1>
  );
} else {
  question = (
    <h1>
      Good morning! Welcome.
    </h1>
  );
}

ReactDOM.render(question, document.getElementById('app'));
