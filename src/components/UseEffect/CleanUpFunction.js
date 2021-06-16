import { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return function cleanup() {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render");

  return (
    <>
      <p>UseEffectCleanUpFunction</p>
      <h4>{size}</h4>
    </>
  );
};

export default CleanUpFunction;
