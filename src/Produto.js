import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <div>
      Produto:{' '}
      {dados.map((dados) => (
        <li key={dados.id}>{dados.nome}: {dados.preco}</li>
      ))}
    </div>
  );
};

export default Produto;
