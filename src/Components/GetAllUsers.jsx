import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../features/userDetailsSlice';
import { Link } from 'react-router-dom';

const GetAllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) =>  state.userDetails?.users); // Optional chaining to safely access users
  const loading = useSelector((state) => state.userDetails?.loading);
  const error = useSelector((state) => state.userDetails?.error);
  useEffect(() => {
  dispatch(getAllUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!Array.isArray(users)) {
    return <p>No users found.</p>;
  }

  return (
    <div>
     {users.map((user) => (
        <Card key={user.id} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={user.avatar || "default_image_url"} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Link to={`/GetSingleUser/${user.id}`}>
View DETAILS
                      </Link>

          </Card.Body>
        </Card>
      ))} 
    </div>
  );
};

export default GetAllUsers;
