import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
const WithMultipleInput = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.lastName && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    // [name]:value same as firstName:value
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <h3 className="text-center">Form</h3>
      <Form className="container-fluid">
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={person.firstName}
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="enter your first name"
          />
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={person.lastName}
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="enter your last name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={person.email}
            type="email"
            onChange={handleChange}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <pre style={{ textAlign: "center" }}>
        {people.map((person) => {
          const { id, firstName, lastName, email } = person;
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
              <h6>{firstName}</h6>
              <h6 style={{ marginLeft: "1rem" }}>{lastName}</h6>
              <p style={{ marginLeft: "1rem" }}>{email}</p>
            </div>
          );
        })}
      </pre>
    </>
  );
};

export default WithMultipleInput;
