// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Header.
const Header = () => {
  // Retorna um header com uma ul que contém dois li, cada li contém um a que contém um href que redireciona para a página home e para a página de produtos.
  return (
    <header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>
    </header>
  );
};

export default Header; // Está exportando o componente Header.
