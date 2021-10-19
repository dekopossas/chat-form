const INITIAL_STATE = {
  selectedPerson: {},
  data: {},
};

const chatReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SELECT_REPORT') {
    return {
      ...state,
      selectedPerson: action.person,
    };
  }
  if (action.type === 'SET_DATA') {
    return {
      ...state,
      dataBase: action.data,
    }
  }
  return state;
};

export default chatReducer;
