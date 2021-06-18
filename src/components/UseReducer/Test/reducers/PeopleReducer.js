// export const PeopleAdd = (state, action) => {
//   switch (action.type) {
//     case "PERSON_ADD":
//       const newPeople = [...state.peoples, action.payload];
//       return {
//         peoples: newPeople,
//       };
//     case "REMOVE_PEOPLE":
//       const new_People = state.peoples.filter(
//         (person) => person.id !== action.payload
//       );
//       return {
//         ...state,
//         peoples: new_People,
//       };
//     default:
//       return state;
//   }
// };

export const PeopleAdd = (state, action) => {
  switch (action.type) {
    case "PERSON_ADD":
      return {
        peoples: [...state.peoples, action.payload],
      };
    case "REMOVE_PEOPLE":
      const new_People = state.peoples.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        peoples: new_People,
      };
    default:
      return state;
  }
};
