import React, { useEffect, useState } from "react";

const Basic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("console from useEffect");
    document.title = `New Messages ${value}`;
  }, [value]);
  console.log("from outside");
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        click me
      </button>
    </>
  );
};

export default Basic;
