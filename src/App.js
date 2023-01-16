import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          value="azul"
          checked={cor === 'azul'}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          value="vermelho"
          checked={cor === 'vermelho'}
        />
        Vermelho
      </label>
      <h2>Produto</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          value="smartphone"
          checked={produto === 'smartphone'}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === 'notebook'}
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
};

export default App;
