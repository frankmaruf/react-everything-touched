import { useReducer, useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const handleButton = (e) => {
    e.preventDefault();
    if (name) {
      const person = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch({ type: "ADD_PEOPLE", payload: person });
    }
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_PEOPLE":
        return {
          ...state,
          isModelOpen: true,
          modelContent: "Person Added",
        };
      default:
        return state;
    }
  };
  const defaultState = {
    people: [],
    isModelOpen: false,
    modelContent: "",
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <p>All People</p>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" onClick={handleButton}>
        add more people
      </button>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div style={{ textAlign: "center" }} key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Test;
