import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a Home</p>
      <Link to="produto/notebook">Notebook</Link> {'   '}
      <Link to="produto/smartphone">Smarphone</Link>
    </div>
  );
};

export default Home;
