// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { Link } from "react-router-dom";

// Importa a biblioteca Helmet.
import { Helmet } from "react-helmet";

// Importa o componente.
import Head from "./Head";

// Criado um componente chamado Home.
const Home = () => {
  // Retorna uma div com um título, um parágrafo e dois links.
  return (
    <div>
      {/* O componente Head está recebendo dois parâmetros no props: title e description cada um com seu valor. */}
      {/* <Head title="Home" description="Essa é a descrição da Home" /> */}

      {/* Temos a opção de utilizar a biblioteca Helmet para alterar o título e a descrição da página. */}
      <Helmet>
        {/* O title é o título da página. */}
        <title>React | Home</title>
        {/* O meta é a descrição da página. */}
        <meta name="description" content="Essa é a descrição da Home" />
      </Helmet>

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
