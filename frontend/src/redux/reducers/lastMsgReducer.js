const INITIAL_STATE = {
  lastMsg: {
    author: '',
    body: '',
    time: '',
  },
};

const lastMsgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LEST_MSG':
      return {
        ...state,
        lastMsg: {
          ...state.lastMsg,
          author: action.msg.author,
          body: action.msg.body,
          time: action.msg.time,
        },
      };
    default:
      return state;
  }
};

export default lastMsgReducer;
