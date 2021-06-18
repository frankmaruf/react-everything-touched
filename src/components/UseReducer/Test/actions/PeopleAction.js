const PeopleList = () => async (dispatch, setState) => {
  try {
    dispatch({
      type: "ADD_PEOPLE",
    });
  } catch (error) {}
};
