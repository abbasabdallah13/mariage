import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { client } from '../../client';
import './index.scss';

const Login = () => {
  const [guests, setGuests] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // to make sure the userName in local storage is empty
  // when you are in login page
  localStorage.clear();
  console.log('i am userName : ', localStorage.getItem('userName'));

  useEffect(() => {
    client
      .fetch(
        `*[_type == "guests"] {
        userName,
        password,
        firstName,
        childrens,
        partner,
        reception,
        wineReception,
        accommodation1night,
        accommodation2night,
      }`
      )
      .then((guests) => setGuests(guests))
      .catch(console.error);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    let guest = guests.find(
      (g) =>
        g.userName !== null &&
        g.userName.current === userName &&
        g.password !== null &&
        g.password.current === password
    );

    if (guest) {
      // if guest login properly then we store his information in local storage
      localStorage.setItem('userName', guest.userName.current);
      localStorage.setItem('firstName', guest.firstName);
      localStorage.setItem('childrens', guest.childrens);
      localStorage.setItem('partner', guest.partner);
      localStorage.setItem('reception', guest.reception);
      localStorage.setItem('wineReception', guest.wineReception);

      navigate('/home');
    } else {
      alert('Wrong username or password');
    }
  }

  console.log('i am guests list : ', guests);
  console.log('i am the guest : ', localStorage.getItem('userName'));

  return (
    <>
      <Form onSubmit={handleSubmit} className='form'>
        <Form.Group size='lg' controlId='userName'>
          <Form.Control
            autoFocus
            type='text'
            value={userName}
            placeholder='Username'
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='password'>
          <Form.Control
            className=''
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block='true' size='lg' type='submit' className='glow-on-hover'>
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
