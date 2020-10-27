export const POKEMON = 'POKEMON';

const getPokemon = params => (dispatch) => {
  dispatch({ type: POKEMON, payload: params });
};

export {
  getPokemon,
};
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