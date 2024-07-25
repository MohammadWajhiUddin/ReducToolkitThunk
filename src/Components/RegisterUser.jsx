import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";

const RegisterUser = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = React.useState({});

  const upLoadUser = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
  };

  return (
    <>
      <Form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={upLoadUser}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="numerix"
            name="age"
            placeholder="Enter age"
            onChange={upLoadUser}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={upLoadUser}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default RegisterUser;
