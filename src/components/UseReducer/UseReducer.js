import { useEffect, useReducer, useState } from "react";
import { data } from "../../data/data";
// import { PeopleAdd } from "../UseReducer/Test/reducers/PeopleReducer";

const PeopleAdd = (state, action) => {
  switch (action.type) {
    case "PERSON_ADD":
      const newPeople = [...state.peoples, action.payload];
      return {
        peoples: newPeople,
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

const UseReducer = () => {
  const defaultState = {
    peoples: data,
  };
  const [state, dispatch] = useReducer(PeopleAdd, defaultState);
  const [name, setName] = useState("");
  const handleDelete = (id) => {
    const newPerson = data.filter();
  };
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      <h3 className="mt-3">People List</h3>
      {state.peoples.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h5>{name}</h5>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_PEOPLE", payload: person.id });
              }}
            >
              Delete Person
            </button>
          </div>
        );
      })}
      <input
        style={{ display: "flex" }}
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button
          onClick={() => {
            if (name) {
              const person = {
                id: new Date().getTime().toString(),
                name,
              };
              dispatch({ type: "PERSON_ADD", payload: person });
              setName("");
            }
          }}
        >
          Add Person
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
