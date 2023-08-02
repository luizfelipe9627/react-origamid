// Importa a biblioteca React
import React from "react";

// Importa a biblioteca jQuery.
import $ from "jquery";

// Criado um componente chamado Contato.
const Contato = () => {
  console.log($); // Imprime no console o objeto jQuery.
  
  // Retorna um elemento div com um h1.
  return (
    <div>
      <h1>Contato</h1>
    </div>
  );
};

export default Contato; // Exporta o componente Contato.
