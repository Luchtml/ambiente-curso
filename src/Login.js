import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fazer Login');
    navigate('/sobre');
  }
  <h1>Login</h1>;
  return <button onClick={handleClick}>Login</button>;
};

export default Login;
