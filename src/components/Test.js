import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Test = () => {
  const [person, setPerson] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.fullname && person.email && person.password) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        fullname: "",
        email: "",
        password: "",
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <Form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <Form.Group controlId="fullname">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            placeholder="Enter Your Name"
            name="fullname"
            type="text"
            onChange={handleChange}
            value={person.fullname}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            placeholder="Enter Your Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={person.email}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            value={person.password}
          />
        </Form.Group>
        <Button type="submit">submit</Button>
      </Form>
      <pre style={{ textAlign: "center" }}>
        {people.map((person) => {
          const { id, fullname, email, password } = person;
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "1rem",
                backgroundColor: "lightblue",
                border: "0.1rem solid black",
              }}
              key={id}
            >
              <h6>{fullname}</h6>
              <h6 style={{ marginLeft: "1rem" }}>{password}</h6>
              <p style={{ marginLeft: "1rem" }}>{email}</p>
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default Test;
