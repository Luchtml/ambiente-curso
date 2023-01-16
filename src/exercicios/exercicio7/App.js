import React from 'react';

//Criação de um objeto com as diferenças de cada campo de formulario
//Só preciso dela criada uma vez
const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const App = () => {

  //estado do formulario, 
  const [form, setForm] = React.useState(
    //adiciona os valores/elementos anteriores + id atual, passando por todas
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }),
  );

  //setar o estado do formulario com a id atual do target e o value digitado nele
  function handleChange({target}) {
    const { id, value } = target
    setForm({...form, [id]: value})
  }

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        //map pelos itens da array, desestruturando as diferenças
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange}/>
        </div>
      ))}
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
