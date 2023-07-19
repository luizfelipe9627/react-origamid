// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Button que recebe uma desestruturação responsável por retornar o items que foi passada no componente.
const Button = (...props) => {
  console.log(props); // Imprime no console o objeto props.

  // Retorna um botão com o texto Clique.
  return <button>Clique</button>;
};

export default Button; // Está exportando o componente Button.
