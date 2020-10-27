import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokemons from '@/modules/Pokemons';
import Pokemon from '@/modules/Pokemons/components/pokemon/Pokemon';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Pokemons} />
    <Route path="/pokemon/:pokemonIndex" component={Pokemon} />
  </Switch>
);

export default Routes;
