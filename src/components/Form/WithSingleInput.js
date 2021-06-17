import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
const WithSingleInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName,
        lastName,
        email,
      };
      console.log("submit the form");
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <h3 className="text-center">Form</h3>
      <Form onSubmit={handleSubmit} className="container-fluid">
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={firstName}
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="enter your first name"
          />
        </Form.Group>
        <Form.Group controlId="firstName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={lastName}
            type="text"
            name="lasttName"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="enter your last name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
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

export default WithSingleInput;
