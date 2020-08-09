import React from 'react'
import { connect } from 'react-redux';

const Header = ({ counter }) => {
  return (
    <>
      <h1>Redux DOM Challenge</h1>
      <h2>Counter: {counter}</h2>
    </>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Header)