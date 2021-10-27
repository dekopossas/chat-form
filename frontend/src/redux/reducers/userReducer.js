const INITIAL_STATE = {
  userLogged: {
    id: '',
    avatar: '/image/avatares/avatar3.png',
    name: '',
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
          avatar: action.user.avatar,
          name: action.user.name,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
