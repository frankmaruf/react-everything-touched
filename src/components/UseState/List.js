import { useState } from "react";
import { data } from "../data";
import "../../css/UseStateList.css";
function List() {
  const [peoples, setPeople] = useState(data);
  const handleClick = (id) => {
    let newPeople = peoples.filter((people) => people.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <div className="container p-3 my-3 border">
        <div className="text-center">
          {peoples.map((people) => (
            <div className="items" key={people.id}>
              <h3>{people.name}</h3>
              <button onClick={() => handleClick(people.id)}>Delete Me</button>
            </div>
          ))}
          <div className="ml-3 text-center">
            <button
              onClick={() => setPeople([])}
              className="btn btn-warning mt-4"
              type="button"
            >
              Clear Peoples
            </button>
            <button
              onClick={() => setPeople(data)}
              className="btn btn-warning mt-4"
              type="button"
            >
              get Peoples
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
