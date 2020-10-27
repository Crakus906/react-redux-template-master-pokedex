/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import '../../styles.scss';
import PokemonList from '../pokemon/PokemonList';


export default class NavBar extends Component {
  render() {
    return (
      <div className="row">
            <div className="col">
                <PokemonList/>
            </div>
      </div>
    );
  }
}
