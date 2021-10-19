const INITIAL_STATE = {
  selectedPerson: {},
};

const chatReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SELECT_REPORT') {
    return {
      ...state,
      selectedPerson: action.person,
    };
  }
  return state;
};

export default chatReducer;
