import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Guests from '../../utils/Guests';
import './index.scss';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const guests = Guests();

  localStorage.clear();

  console.log('i am guests list : ', guests);

  function handleSubmit(event) {
    event.preventDefault();
    let guest = guests.find(
      (g) =>
        g.userName !== null &&
        g.userName === userName &&
        g.password !== null &&
        g.password === password
    );

    if (guest) {
      Object.keys(guest).map((info) => {
        switch (info) {
          case 'password':
            localStorage.setItem(info, true);
            break;
          case 'userName':
            localStorage.setItem(info, guest[info]);
            break;
          default:
            localStorage.setItem(info, guest[info]);
        }

        return console.log(' i am guest from login/index.js : ', guest);
      });

      navigate('/home');
    } else {
      alert('Wrong username or password');
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className='form'>
        <div className='form_inputs'>
          <Form.Group size='lg' controlId='userName'>
            <Form.Control
              // autoFocus
              type='text'
              value={userName}
              placeholder="Identifiant"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group size='lg' controlId='password'>
            <Form.Control
              className=''
              type='password'
              value={password}
              placeholder='Mot de passe'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </div>
        <Button block='true' size='lg' type='submit' className='glow-on-hover'>
          Connexion
        </Button>
      </Form>
    </>
  );
};

export default Login;
