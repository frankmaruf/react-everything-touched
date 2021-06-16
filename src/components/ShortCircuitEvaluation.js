import React, { useState } from "react";

// One Thing to note is has to call back function to use
//  call back function use TernaryOperator

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState("k");
  const firstValue = text || "Hello World";
  const secondValue = text && "Hello World";
  const [isError, setIsError] = useState(false);
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        {/* in (OR) operator: if {text} is true it will be print Hello World if not it will be
        print text value */}
        <h4>firstValue:{firstValue}</h4>
        {/* in (And) operator: if {text} is true it will be print Hello World if it's not
        it will print nothing
        */}
        <h4>secondValue:{secondValue}</h4>
        <h4>ShortCircuitEvaluation:{text || "Maruf"}</h4>
        {text && <h4>Hello World</h4>}
        {isError || <h6 style={{ marginTop: "5rem" }}>NO Error.....</h6>}
        {isError && <h6 style={{ marginTop: "5rem" }}>Error.....</h6>}
        <button onClick={() => setIsError(!isError)}>toggle Error</button>
      </div>
    </>
  );
};

export default ShortCircuitEvaluation;
