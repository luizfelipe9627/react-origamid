// Importa a biblioteca React.
import React from "react";

// Importa os componentes da biblioteca react-router-dom.
import { Link, NavLink, useLocation } from "react-router-dom";

// Importa o arquivo CSS.
import "./Header.css";

// Criado um componente chamado Header.
const Header = () => {
  const location = useLocation(); // O useLocation é um hook que retorna o objeto location que contém informações sobre a rota atual.

  // O useEffect é usado para executar uma função quando o componente for renderizado, nesse caso vai executar quando o location(a rota) mudar.
  React.useEffect(() => {
    console.log("Mudou de rota"); // Está mostrando no console que mudou de rota.
  }, [location]);

  // Retorna um nav com os links para as rotas.
  return (
    <nav>
      <h4>Link</h4>
      {/* O Link é responsável por criar um link para uma rota. */}
      {/* O atributo to é o caminho para a página. */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <h4>NavLink</h4>
      {/* O NavLink é responsável por adicionar uma classe ao link quando ele estiver ativo, ou seja, quando a rota for acessada. */}
      {/* O atributo activeClassName é a classe que vai ser adicionada ao link quando ele estiver ativo. */}
      {/* O atributo end é usado para indicar que a rota só vai ser acessada se for exatamente o caminho indicado no atributo to. */}
      <NavLink to="/" activeclassname="active" end>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeclassname="active">
        About
      </NavLink>
      {" | "}
      <NavLink to="/login" activeclassname="active">
        Login
      </NavLink>
    </nav>
  );
};

export default Header; // Está exportando o componente Header.
