// Importa a biblioteca React.
import React from "react";

// Importa o arquivo CSS.
import "./Title.css";

// Criado um componente chamado Title.
const Title = () => {
  // Retorna um h1 com o texto Titulo e com o estilo definido no arquivo Title.css.
  return (
    <React.Fragment>
      <h1>Titulo na cor verde</h1>
      <h2 className="title">Titulo com conflito</h2>
    </React.Fragment>
  );
};

export default Title; // Está exportando o componente Title.
