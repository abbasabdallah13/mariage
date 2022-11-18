import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Admins from "../../utils/Admins";
import "./index.scss";

const LoginDashboard = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const admins = Admins();
    const [display , setDisplay] = useState('none');
  
    localStorage.clear();
  
    console.log('i am an admin list : ', admins);
  
    function handleSubmit(event) {
      event.preventDefault();
      let admin = admins.find(
        (g) =>
          g.userName !== null &&
          g.userName === userName &&
          g.password !== null &&
          g.password === password
      );
  
      if (admin) {
        Object.keys(admin).map((info) => {
          switch (info) {
            case 'password':
              localStorage.setItem(info, true);
              break;
            case 'userName':
              localStorage.setItem(info, admin[info].current);
              break;
            default:
              localStorage.setItem(info, admin[info]);
          }
  
          return console.log(' i am an from login/index.js : ', admin);
        });
  
        navigate('/dashboard');
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
          </div>
          <Button block='true' size='lg' type='submit' className='glow-on-hover'>
            Login
          </Button>
        </Form>
      </>
    );
  };

export default LoginDashboard;
