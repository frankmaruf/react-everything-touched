import React from "react";
import { useState } from "react";
import "../../css/UseStateList.css";

const Obj = () => {
  const [people, setPeople] = useState({
    name: "",
    age: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPeople((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container p-3 my-3 border">
        <div className="text-center">
          <h2>{people.name}</h2>
          <h3>{people.age}</h3>
          <h3 className="lead">{people.message}</h3>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={people.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={people.age}
            onChange={handleChange}
          ></input>
          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            value={people.message}
            onChange={handleChange}
          ></input>
          <button type="submit">Click Me</button>
        </div>
      </div>
    </>
  );
};

export default Obj;
