// Importa o React.
import React from "react";

const Titulo = ({ texto }) => {
  // Retorna um h1 com o texto que foi passado no parâmetro texto, com a cor verde.
  return <h1 style={{ color: "#4c8b64" }}>{texto}</h1>;
};

export default Titulo; // Está exportando o componente Titulo.
