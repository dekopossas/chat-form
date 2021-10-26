  const INITIAL_STATE = {
    dataBase: {},
  };
  
  const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          dataBase: action.data,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  