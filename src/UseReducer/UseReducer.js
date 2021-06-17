import { useEffect, useReducer, useState } from "react";
import { data } from "../data/data";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modelContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModelOpen: true,
      modelContent: "no value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModelOpen: false,
    };
  }
};
const defaultState = {
  people: [],
  isModelOpen: false,
  modelContent: "",
};
const UseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div className="text-center mt-3">
      <h3>Use Reducer</h3>
      {state.isModelOpen && (
        <Model closeModal={closeModal} modelContent={state.modelContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <li>{person.name}</li>
            <button
              onClick={dispatch({ type: "REMOVE_ITEMS", payload: person.id })}
            >
              click to remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducer;

export const Model = ({ modelContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <>
      <h3>{modelContent}</h3>
    </>
  );
};
