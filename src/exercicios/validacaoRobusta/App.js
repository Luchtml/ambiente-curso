import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)){ 
      console.log('enviou')
    } else {
      console.log('Não enviou')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onBlur={handleBlur}
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
