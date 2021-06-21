import { useState } from "react";
import { data } from "../../data/data";

const People = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState();
  const submitName = () => {
    if (name) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name,
      };
      setPeople((oldPeople) => {
        return [...oldPeople, newPerson];
      });
    }
  };
  return (
    <div>
      {people.map((people) => {
        return (
          <div key={people.id}>
            <h3 className="text-capitalize">{people.name}</h3>
          </div>
        );
      })}
      <input
        placeholder="enter a name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitName}>add name</button>
    </div>
  );
};

export default People;
