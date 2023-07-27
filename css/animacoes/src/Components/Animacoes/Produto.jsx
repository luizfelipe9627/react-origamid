// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Produto.
const Produto = () => {
  // Retorna três divs com animações diferentes.
  return (
    <React.Fragment>
      <div className="animeTop">
        <h1>Produto 1</h1>
        <p>Meu produto</p>
      </div>

      <div className="animeLeft">
        <h1>Produto 2</h1>
        <p>Meu produto</p>
      </div>

      <div className="animeZoom">
        <h1>Produto 3</h1>
        <p>Meu produto</p>
      </div>
    </React.Fragment>
  );
};

export default Produto; // Está exportando o componente Produto.
