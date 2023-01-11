import React from 'react';


//Desafio do curso de React
//mostrar na tela nome, idade, situação (se ativa, verde, senão, vermelho) e total gasto
//(caso maior que 10000 mostrar a frase 'gastando muito')
const lucas = {
  cliente: 'Lucas',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};
const thamires = {
  cliente: 'Thamires',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = lucas;
  const total = dados.compras
    .map((compra) => {
      return Number(compra.preco.replace('R$ ', ''));
    })
    .reduce((acc, preco) => {
      return acc + preco;
    });

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$: {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default App;
