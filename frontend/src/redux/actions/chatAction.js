export const selectChat = (person) => {
  return {
    type: 'SELECT_REPORT',
    person,
  };
};

export const setData = (data) => {
  return {
    type: 'SET_DATA',
    data,
  };
};
