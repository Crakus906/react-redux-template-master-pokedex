/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable default-case */
/* eslint-disable dot-notation */
/* eslint-disable linebreak-style */
import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPokemon } from '@/redux/actions/pokemon';
import loader from '../../../../assets/images/loader.gif';
import st from './style.scss';


class Pokemon extends React.Component {

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    // Urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

    // Get Pokemon Informations

    const pokemonRes = await axios.get(pokemonUrl);

    const { name } = pokemonRes.data;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let {
      hp, attack, defence, speed, specialAttack, specialDefense,
    } = '';

    pokemonRes.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defence = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
      }
    });
    const types = pokemonRes.data.types.map(type => type.type.name);

    // this.setState({
    //   imageUrl,
    //   pokemonIndex,
    //   name,
    //   types,
    //   stats: {
    //     hp,
    //     attack,
    //     defence,
    //     speed,
    //     specialAttack,
    //     specialDefense,
    //   },
    // });

    this.props.getPokemon({
      imageUrl,
      pokemonIndex,
      name,
      types,
      hp,
      attack,
      defence,
      speed,
      specialAttack,
      specialDefense,
    });
  }

  render() {
    console.log(this.props.pokemon);
    return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a href="" className="pokedex__header">Pokedex </a>
     </nav>
     { this.props.pokemon
       ? <>
      <div className="col">
        <div className="card">
          <div className="card-header">

            <div className="row">
              <div className="col-5">
                <h5>{this.props.pokemon.pokemonIndex}</h5>
               
              </div>
              <div className="col-7">
                <div className="float-right">
                <h5 className={`${st.types}`}>{this.props.pokemon.types}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={this.props.pokemon.imageUrl} className="card-img-top" alt=""/>
              </div>
              <div className="col-md-9">
                <div className="mx-auto">{this.props.pokemon.name.toLowerCase().split('-').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 mt-2">HP</div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${this.props.pokemon.hp}%` }}>
                        <span>{this.props.pokemon.hp}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 mt-2">attack</div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${this.props.pokemon.attack}%` }}>
                        <span>{this.props.pokemon.attack}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 mt-2">defence</div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="progress">
                      <div className="progress-bar"
                      style={{ width: `${this.props.pokemon.defence}%` }}>
                        <span>{this.props.pokemon.defence}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 mt-2">speed</div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${this.props.pokemon.speed}%` }}>
                        <span>{this.props.pokemon.speed}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 mt-2">specialAttack</div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${this.props.pokemon.specialAttack}%` }}>
                        <span>{this.props.pokemon.specialAttack}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 mt-2">specialDefense</div>
                  <div className="col-12 col-md-9 mt-2">
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${this.props.pokemon.specialDefense}%` }}>
                        <span>
                          {this.props.pokemon.specialDefense}
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="card-body">

            </div>
          </div>
        </div>
      </div>
      </>
       : <img src={loader}/> }
    </div>
    );
  }
}
const mapStateToProps = state => ({
  pokemon: state.pokemon.data,
});
// name: '',
//       pokemonIndex: '',
//       imageUrl: '',
//       types: [],
//       descriptoin: '',
//       stats: {
//         hp: '',
//         attack: '',
//         defence: '',
//         speed: '',
//         specialAttack: '',
//         specialDefense: '',
//       },
const mapDispatchToProps = dispatch => bindActionCreators({
  getPokemon,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
