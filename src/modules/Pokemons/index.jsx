/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';


class Pokemons extends Component {
  render() {
    return (
        <div className="App mt-5">
          <NavBar />
          <div className="container">
          <Dashboard />
          </div>
        </div>
    );
  }
}

export default connect()(Pokemons);
