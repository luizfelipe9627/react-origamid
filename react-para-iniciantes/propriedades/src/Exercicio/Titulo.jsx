// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Titulo que recebe uma desestruturação responsável por retornar o texto que foi passada no componente.
const Titulo = ({ texto }) => {
  // Retorna um h1 com o texto que foi passado no parâmetro texto, com a cor verde.
  return <h1 style={{ color: "#4c8b64" }}>{texto}</h1>;
};

export default Titulo; // Está exportando o componente Titulo.
