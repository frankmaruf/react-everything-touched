import { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>UseEffectCleanUpFunction</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="text-center"
      >
        show/hide
      </button>
      {show && <Items />}
    </>
  );
};

export default CleanUpFunction;

const Items = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.addEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <div className="text-center" style={{ marginTop: "2rem" }}>
        <h1>windwos</h1>
        <h3>{size}</h3>
      </div>
    </>
  );
};
