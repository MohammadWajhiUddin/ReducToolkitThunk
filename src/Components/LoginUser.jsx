import React, { useState, useEffect } from "react";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/UserAuthenticateSlice";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const Credentials = useSelector((state) => state.authenticateUser.user);

  const loginStatus = useSelector((state) => state.authenticateUser.status);
  const loginError = useSelector((state) => state.authenticateUser.error);
  const [user, setUser] = useState({ userEmail: "", userPassword: "" });
  const handleChangeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };


  useEffect(() => {
    if (loginStatus === "succeeded") {
      if (Credentials !== "No record existed" && Credentials !== "The password is incorrect") {
        navigate('/HomeScreen'); // Replace with your desired path
      } else {
        alert("Invalid credentials");
      }
    }
  }, [loginStatus, Credentials, navigate]);
  return (
<Container fluid style={{ backgroundColor: "black", height: "100vh" }}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Col md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">
              <img
                  src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?t=st=1721922236~exp=1721925836~hmac=5e2ecaec4233e99186f4745ea8ed8aa448b6b119152ad3cadd80e6a1f93b9d8b&w=826"
                  alt="Login"
                  style={{ width: "300px", marginBottom: "20px" ,height:"300px"}}
                />
                
                                <h2>Login</h2>
              </Card.Title>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    placeholder="Enter email"
                    name="userEmail"
                    onChange={handleChangeData}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="userPassword"
                    onChange={handleChangeData}
                  />
                </Form.Group>


                <Button variant="primary" type="submit" className="w-100 mb-20">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUser;
