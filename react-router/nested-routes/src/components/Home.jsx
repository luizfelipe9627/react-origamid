// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { Link } from "react-router-dom";

// Criado um componente chamado Home.
const Home = () => {
  // Retorna uma div com um título, um parágrafo e dois links para as rotas.
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a home.</p>

      {/* O Link é o componente que vai fazer a navegação entre as rotas. */}
      {/* O to é o caminho da rota que vai ser acessada. */}
      <Link to="/produto/notebook">Notebook</Link>
      {" | "}
      <Link to="/produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home; // Está exportando o componente Home.
