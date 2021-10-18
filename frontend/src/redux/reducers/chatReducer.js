const allReports = [{}, {}, {}, {}, {}, {}, {}]

const INITIAL_STATE = {
  selectedPerson: {},
  allReports: [...allReports],
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
