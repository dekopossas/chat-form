const INITIAL_STATE = {
  selectedPerson: {},
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_REPORT':
      return {
        ...state,
        selectedPerson: action.person,
      };
    default:
      return state;
  }
};

export default chatReducer;
