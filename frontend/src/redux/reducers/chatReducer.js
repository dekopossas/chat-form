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
    default:
      return state;
  }
};

export default chatReducer;
