import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { client } from "../client";

export default function Login() {
  const [guests, setGuests] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "guests"] {
        userName,
        password
      }`
      )
      .then((guests) => setGuests(guests))
      .catch(console.error);
  }, []);

  // map over guests and get userName and password
  const guestUserName = guests?.map((guest) => guest.userName);
  const guestPassword = guests?.map((guest) => guest.password);
  console.log(guests);


  function handleSubmit(event) {
    event.preventDefault();
    if (guestUserName === userName && guestPassword === password) {
      navigate("/home");
    }
    else {
      alert("Wrong username or password");
    }
  }

  return (
    
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>

    </div>
  );
}
