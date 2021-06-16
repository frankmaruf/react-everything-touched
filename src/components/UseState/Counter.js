import React from "react";
import { useState } from "react";
import "../../css/UseStateList.css";
const Counter = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <>
      <section
        style={{
          backgroundColor: "lightblue",
          textAlign: "center",
          margin: "4rem 0",
        }}
      >
        <h2>regular counter</h2>
        <h1>{value1}</h1>
        <button
          className=""
          onClick={() => setValue1((old) => (old === 0 ? (old = 0) : old - 1))}
        >
          decrease
        </button>
        <button
          style={{ padding: "0 1rem", backgroundColor: "blueviolet" }}
          className=""
          onClick={() => setValue1((old) => (old = 0))}
        >
          reset
        </button>
        <button className="" onClick={() => setValue1((old) => old + 1)}>
          increase
        </button>
      </section>
      {/* more complex counter */}
      <section
        style={{
          backgroundColor: "lightgreen",
          textAlign: "center",
          margin: "4rem 0",
        }}
      >
        <h2>complex counter</h2>
        <h1>{value2}</h1>
        <button
          className=""
          onClick={() => setValue2((old) => (old === 0 ? (old = 0) : old - 1))}
        >
          decrease
        </button>
        <button
          style={{ padding: "0 1rem", backgroundColor: "blueviolet" }}
          onClick={() =>
            setTimeout(() => {
              setValue2((value) => (value = 0));
            }, 2000)
          }
        >
          reset
        </button>
        <button className="" onClick={() => setValue2((old) => old + 1)}>
          increase
        </button>
      </section>
    </>
  );
};

export default Counter;
