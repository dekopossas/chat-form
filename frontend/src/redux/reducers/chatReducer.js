const INITIAL_STATE = {
  user: {
    id: '',
    avatar: '',
    name: '',
  },
  selectedPerson: {},
  // dataBase: {},
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_REPORT':
      return {
        ...state,
        selectedPerson: action.person,
      };
    case 'SET_DATA':
      return {
        ...state,
        dataBase: action.data,
      };
    case 'SET_USER':
      return {
        ...state,
        user: {
          ...state.user,
          id: action.user.id,
          avatar: action.user.avatar,
          name: action.user.name,
        },
      };
    default:
      return state;
  }
};

export default chatReducer;
