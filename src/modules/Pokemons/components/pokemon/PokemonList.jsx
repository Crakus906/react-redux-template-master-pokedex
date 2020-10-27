/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import axios from 'axios';

import '../../styles.scss';
import PokemonCard from './PokemonCard';
import Pagination from '../pagination/Pagination';

export default class PokenomList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
    pokemon: null,
    count: 0,
    pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    offset: 0,
    curentPage: 1,
  };


  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data.results, count: res.data.count });
  }

  nextPage = (e) => {
    if (e == 'First') {
      axios.get(this.state.url).then(res => this.setState({
        pokemon: res.data.results,
        count: res.data.count,
        pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        curentPage: this.state.pagination[0],
      }));
    } else if (e == 'Previous') {
      if (this.state.pagination[0] !== 1) {
        const url1 = `https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset - 20}&limit=20`;
        axios.get(url1).then(res => this.setState({
          pokemon: res.data.results,
          pagination: this.state.pagination.map(item => item - 1),
          offset: this.state.offset - 20,
          curentPage: this.state.curentPage - 1,
        }));
      }
    } else if (e == 'Next') {
      if (this.state.pagination[9] !== 49) {
        const url2 = `https://pokeapi.co/api/v2/pokemon/?offset=${this.state.offset + 20}&limit=20`;
        axios.get(url2).then(res => this.setState({
          pokemon: res.data.results,
          pagination: this.state.pagination.map(item => item + 1),
          offset: this.state.offset + 20,
          curentPage: this.state.curentPage + 1,
        }));
      }
    } else if (e == 'Last') {
      const pages = Math.ceil(this.state.count / 20);
      const pagination = [];
      for (let i = pages; i > pages - 10; i--) {
        pagination.push(i);
      }
      this.setState({ pagination: pagination.reverse() });
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=${pagination[9] * 20 - 20}&limit=20`;
      axios.get(url).then(res => this.setState({ pokemon: res.data.results, curentPage: pagination[9] }));
    } else {
      const url = `https://pokeapi.co/api/v2/pokemon/?offset=${e * 20 - 20}&limit=20`;
      axios.get(url).then(res => this.setState({ pokemon: res.data.results, curentPage: e }));
    }
  }

  render() {
    return (
    <div>
       {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
            <Pagination
              nextPage={this.nextPage}
              count={this.state.count}
              pagination={this.state.pagination}
              curentPage={this.state.curentPage}
            />
        </div>) : (<h1>Loading Pokemon</h1>)}

    </div>
    );
  }
}
