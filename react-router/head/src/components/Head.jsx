// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Head que recebe um props como parâmetro.
const Head = (props) => {
  // O React.useEffect executa quando o componente é renderizado na tela toda vez que o props for alterado.
  React.useEffect(() => {
    document.title = "React | " + props.title; // Altera o título da página para o valor do props title concatenado com o texto 'React | '.
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description); // Altera o conteúdo da meta description para o valor do props description.
  }, [props]);

  return <></>;
};

export default Head; // Está exportando o componente Head.
