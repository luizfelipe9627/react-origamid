// Importa o React.
import React from "react";

// Importa os componentes.
import Home from "./Home";
import Header from "./Header";
import Produtos from "./Produtos";

// Criado um componente chamado Exercicio.
const Exercicio = () => {
  const { pathname } = window.location; // Armazena na variável pathname o caminho da URL atual.
  let Pagina = pathname === "/" ? Home : Produtos; // Se o pathname for igual a / retorna o componente Home, se não retorna o componente Produtos e armazenando na variável Pagina.

  // Retorna uma section com o componente Header e o componente Pagina.
  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default Exercicio; // Está exportando o componente Exercicio.
