// Importa a biblioteca React.
import React from "react";

// Importa os componentes da biblioteca react-router-dom.
import { Link, NavLink } from "react-router-dom";

// Importa o arquivo CSS.
import "./Header.css";

// Criado um componente chamado Header.
const Header = () => {
  // Retorna um nav com os links para as rotas.
  return (
    <nav>
      <h4>Link</h4>
      {/* O Link é responsável por criar um link para uma rota. */}
      {/* O atributo to é o caminho para a página. */}
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <h4>NavLink</h4>
      {/* O NavLink é responsável por adicionar uma classe ao link quando ele estiver ativo, ou seja, quando a rota for acessada. */}
      {/* O atributo end é usado para indicar que a rota só vai ser acessada se for exatamente o caminho indicado no atributo to. */}
      <NavLink to="/" end>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about">
        About
      </NavLink>
      {" | "}
      <NavLink to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Header; // Está exportando o componente Header.
