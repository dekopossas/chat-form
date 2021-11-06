const INITIAL_STATE = {
  userLogged: {
    id: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userLogged: {
          ...state.userLogged,
          id: action.user.id,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
