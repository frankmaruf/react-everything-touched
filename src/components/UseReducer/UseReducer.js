import { useReducer, useState } from "react";
import { data } from "../../data/data";
import { PeopleAdd } from "./Test/reducers/PeopleReducer";

const UseReducer = () => {
  // <<
  // const defaultState = {
  //   peoples: data,
  // };
  // it's same as state becz state must be an object so i destructure it
  // const [state, dispatch] = useReducer(PeopleAdd, defaultState);
  // >>
  const [{ peoples }, dispatch] = useReducer(PeopleAdd, { peoples: data });
  const [name, setName] = useState("");
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
      {peoples.map((person) => {
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
