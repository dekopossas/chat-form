const INITIAL_STATE = {
  lastMsg: {},
};

const lastMsgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LEST_MSG':
      return {
        ...state,
        lastMsg: action.msg,
      };
    default:
      return state;
  }
};

export default lastMsgReducer;
