import React from 'react';
import { styles } from './styles';

// New object with styles imported from styles.js
const h1Style = {
  color:			styles.color,
  fontSize:		styles.fontSize,
  fontFamily:	styles.fontFamily,
  padding:		styles.padding,
  margin:			0
}

export class AttentionGrabber extends React.Component {
	render() {
		return <h1>WELCOME TO MY HOMEPAGE!</h1>;
	}
}
