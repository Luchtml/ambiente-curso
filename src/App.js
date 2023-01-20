import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component',
      'require("./Component)',
      'import "./Component',
    ],
    resposta: 'import Component from "./Component',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve aser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
//resposta que será setada de acordo com o click do usuário nas opções
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  function resultadoFinal() {
//Filtro para somar e mostrar o resultado das questões corretas
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

//função do botão para avançar a próxima pergunta
  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
//avançar e evocar a função resultado final
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

//Slide tem uma verificação para saber se é igual ao index, retornando um boolean
  const [slide, setSlide] = React.useState(0);

  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
//Resposta será um objeto com o resultado das perguntas e a resposta clicada
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default App;
