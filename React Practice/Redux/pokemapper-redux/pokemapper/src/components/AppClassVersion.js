import React from 'react';
import PokemonMap from './PokemonMap';
import { connect } from 'react-redux';
import { getPokemons } from '../api';
import Header from './Header';
import PokemonList from './PokemonList';

class App extends React.Component {

  componentDidMount() {
    getPokemons()
    .then(pokemons => {
      this.props.setPokemons(pokemons)
    })
  }

  render() {
    const { icon } = this.props
    return (
      <div className={`App ${icon}`}>
        <Header />
        <main>
          <PokemonList />
          <PokemonMap />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return  {
    icon: state.weather.icon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPokemons: pokemons => dispatch({ type: "SET_POKEMONS", payload: pokemons })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
