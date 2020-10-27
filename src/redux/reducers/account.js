import { ACCOUNTS } from '@/redux/actions/accounts';

const initState = {
  currentUser: 'Oleg',
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case ACCOUNTS.CREATE:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
