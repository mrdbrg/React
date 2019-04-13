import React from 'react';
import ReactDOM from 'react-dom';

function switchImage(event) {
  event.target.setAttribute('src', 'link-goes-here');
  event.target.setAttribute('alt', 'new-image');
}

const currentImage = (
  <img src="link-goes-here" alt="current-image" onClick={switchImage} />
);

ReactDOM.render(img, document.getElementById('app'));
