import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSingleUser } from '../features/userDetailsSlice';

const GetSingleUser = () => {
    const {id} = useParams()
  const dispatch = useDispatch();
  const users = useSelector((state) =>  state.userDetails?.users); // Optional chaining to safely access users
  const loading = useSelector((state) => state.userDetails?.loading);
  const error = useSelector((state) => state.userDetails?.error);
  useEffect(() => {
  dispatch(getSingleUser(id));
  }, [dispatch]);

console.log(users)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(loading)
console.log(error)

  return (
    <div>
        
        <Card  style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{users.id}</Card.Title>
            <Card.Title>{users.name}</Card.Title>
            <Card.Title>{users.age}</Card.Title>
            <Card.Title>{users.email}</Card.Title>

          </Card.Body>
        </Card>
      
    </div>
  );
};

export default GetSingleUser;
