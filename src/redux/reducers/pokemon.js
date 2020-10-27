import { POKEMON } from '@/redux/actions/pokemon';


const initState = {
  data: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case POKEMON:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};
