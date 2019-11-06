//Use a Variable Attribute in a Component

import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
  src:  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px
};

class RedPanda extends React.Component {
  render() {
    return (
      <img src={redPanda.src} alt={redPanda.alt} width="redPanda.width" />
    );
  }
};

ReactDom.render(
  <RedPanda />,
  document.getElementById('app');
);
