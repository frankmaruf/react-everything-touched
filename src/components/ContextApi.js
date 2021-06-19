import React, { useState, useContext } from "react";
import { data } from "../data/data";

const PersonContext = React.createContext();
//Two components - Provider, Consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h1>ContextAPI</h1>
      <List />
    </PersonContext.Provider>
  );
};

export default ContextApi;

const List = () => {
  // <
  // const mainData = useContext(PersonContext);
  // What ever i call i can still access to the people
  // with mainData.people.map function
  // >
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <>
      <h3>{name}</h3>
      <button
        onClick={() => {
          console.log(id);
          removePerson(id);
        }}
      >
        Remove
      </button>
    </>
  );
};
