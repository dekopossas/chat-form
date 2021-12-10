const INITIAL_STATE = {
  lastMsg: {},
};

const lastMsgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LEST_MSG':
      return {
        ...state,
        selectedPerson: action.person,
      };
    default:
      return state;
  }
};

export default lastMsgReducer;
