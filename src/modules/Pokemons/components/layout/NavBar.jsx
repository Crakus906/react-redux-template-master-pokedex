/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import '../../styles.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a href="" className="pokedex__header">Pokedex </a>
         </nav>
      </div>
    );
  }
}
