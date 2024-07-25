import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import { logout } from '../features/UserAuthenticateSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const TopNavbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to clear user data
    navigate("/"); // Navigate to the login page
  };


  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">ReduX ToolKit</Navbar.Brand>
      <Nav className="me-2 w-70">
        <Nav.Link href="#home">Add Users</Nav.Link>
        <Nav.Link href="#features">Get Users</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Button variant="outline-light" onClick={handleLogout}>Logout</Button>

    </Container>
  </Navbar>
  )
}

export default TopNavbar