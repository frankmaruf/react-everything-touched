import React, { useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const UseRef = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  //   useRef dosen't triger re-render we need to use useEffect
  useEffect(() => {
    console.log(refContainer.current.value);
    console.log(refContainer.current.focus());
  });
  console.log(refContainer);
  return (
    <>
      <h6 className="text-center mt-3">Let's start</h6>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="fullname">
          <Form.Label>Your Name</Form.Label>
          <Form.Control placeholder="Enter Your Name" type="text" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Your email</Form.Label>
          <Form.Control
            ref={refContainer}
            placeholder="Enter Your Email"
            type="email"
          />
        </Form.Group>
        <Button type="submit">submit</Button>
      </Form>
    </>
  );
};

export default UseRef;
