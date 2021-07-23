import "./styles.css";
import React, { useMemo, useState, useCallback } from "react";
export default function MemoandCall() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [resultC, setResultC] = useState(0);
  const [resultM, setResultM] = useState(0);
  const sumC = (a, b) => setResultC(a + b);
  const sumM = (a, b) => setResultM(a + b);
  const memoizedCallback = useCallback(() => {
    sumC(value1, value2);
  }, [value2]);
  useMemo(() => sumM(value1, value2), [value2]);
  return (
    <div className="App">
      <h3>Hello</h3>
      <input onChange={({ target }) => setValue1(parseInt(target.value))} />
      <input onChange={({ target }) => setValue2(parseInt(target.value))} />
      <button onClick={memoizedCallback}>Add</button>
      <p>From CallBack: {resultC}</p>
      <p>MemoriZeMemo : {resultM}</p>
    </div>
  );
}