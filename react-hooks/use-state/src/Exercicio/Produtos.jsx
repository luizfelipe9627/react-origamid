// Importa o React.
import React from "react";

// Cria um componente chamado Produtos.
const Produtos = ({ dados }) => {
  // Retorna um componente com os dados do produto recebidos por props(que é um objeto).
  return (
    <div>
      {/* Puxa de dados o nome, preço e a primeira foto do primeiro produto. */}
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default Produtos; // Exporta o componente Produtos.
