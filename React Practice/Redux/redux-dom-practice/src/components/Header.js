import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

  const counter = useSelector(state => state.counter)

  return (
    <>
      <h1>Redux DOM Challenge</h1>
      <h2>Counter: {counter}</h2>
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

export default Header;