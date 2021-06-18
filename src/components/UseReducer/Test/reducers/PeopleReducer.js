export const PeopleAdd = (state, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
