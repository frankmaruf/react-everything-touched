import React from "react";
import { useState } from "react";
import "../../css/UseStateList.css";
const MultitpleValues = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="container p-3 my-3 border">
        <div className="text-center">
          <h2>{name}</h2>
          <h3>{age}</h3>
          <h3 className="lead">{message}</h3>
          <label htmlFor="name">Name</label>
          <input id="name" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <label htmlFor="message">Message</label>
          <input
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>
      </div>
    </>
  );
};

export default MultitpleValues;
