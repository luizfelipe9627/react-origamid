// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import Form from "./Form/Form";

// Criado um componente chamado Title que recebe uma desestruturação responsável por retornar o texto e a cor que foi passada no componente.
const Title1 = ({ text, color }) => {
  // Retorna um h1 com o texto que foi passado no parâmetro text e a cor que foi passada no parâmetro color.
  return <h1 style={{ color: color }}>{text}</h1>;
};

// Criado um componente chamado Title2 que recebe uma propriedade chamada children responsável por retornar o conteúdo que está dentro do componente.
const Title2 = (props) => {
  // O children é uma propriedade que retorna o conteúdo que está dentro do componente, permitindo que seja passado um conteúdo dentro do componente ao invès de ser fecha a tag diretamente.
  // Retorna um h1 com o conteúdo que foi passado dentro do componente.
  return <h1>{props.children}</h1>;
};

// Criado um componente chamado App.
const App = () => {
  // Retorna um elemento div com 3 componentes Title1 e um componente Title2.
  return (
    <div>
      {/* Chama o componente Title e passa o parâmetro color com o valor atribuido e o parâmetro text com o valor atribuido. */}
      <Title1 color="red" text="Meu título 1" />
      <Title1 color="green" text="Meu título 2" />
      <Title1 color="blue" text="Meu título 3" />

      <Title2>
        <p>Texto 1</p>
        <p>Texto 2</p>
      </Title2>

      <Form />
    </div>
  );
};

export default App; // Está exportando o componente App.
