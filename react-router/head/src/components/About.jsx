// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Head from "./Head";

// Criado um componente chamado About.
const About = () => {
  // Retorna uma div com um título e um parágrafo.
  return (
    <div>
      {/* O componente Head está recebendo dois parâmetros no props: title e description cada um com seu valor. */}
      <Head title="About" description="Essa é a descrição do About" />

      <h1>About</h1>
      <p>Essa é a About.</p>
    </div>
  );
};

export default About; // Está exportando o componente About.
