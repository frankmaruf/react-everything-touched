import { useState } from "react";
import { data } from "../data/data";

const PropsDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <div>
      <h1>Prop Drilling</h1>
      <List people={people} removePerson={removePerson} />
    </div>
  );
};

export default PropsDrilling;

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
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
