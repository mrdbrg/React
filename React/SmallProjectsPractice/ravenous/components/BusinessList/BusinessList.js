import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    const NUMBER_CARDS = 8;
    const CARDS = 'business_'
    const cards = [];

    for(let i = 0; i < NUMBER_CARDS; i++) {
      cards.push(
        <div key={CARDS + i}>
          <Business />
        </div>
      );
    }
    return (
      <div className="BusinessList">
        {cards}
      </div>
    );
  }
}

export default BusinessList;
