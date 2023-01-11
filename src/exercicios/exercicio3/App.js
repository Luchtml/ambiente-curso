import React from 'react';
import Header from './exercicios/exercicio3/Header';
import Home from './exercicios/exercicio3/Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;
  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
