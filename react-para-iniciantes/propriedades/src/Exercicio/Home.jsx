// Importa o React.
import React from "react";

// Importa o componente.
import Titulo from "./Titulo";

// Criado um componente chamado Home.
const Home = () => {
  // Retorna uma section com o componente Titulo e um parágrafo.
  return (
    <section>
      {/* Chama o componente Titulo e passa o parâmetro texto com o valor atribuido. */}
      <Titulo texto="Home" />
      <p>Essa é a home do site</p>
    </section>
  );
};

export default Home; // Está exportando o componente Home.
