// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import { GlobalContext } from "./GlobalContext";

// Criado um componente chamado Produto.
const Produto = () => {
  const { data } = React.useContext(GlobalContext); // O useContext está recebendo o objeto GlobalContext e desestruturando o objeto data.

  // O componente Produto está retornando um título h1 e uma lista de produtos criados pelo map.
  return (
    <div>
      <h1>Produtos</h1>

      {/* Se o estado de data for true true, ele renderiza o map, se não ele não renderiza nada. */}
      {data &&
        data.map((product) => {
          {/* A cada iterador do map, ele retorna um li com o nome do produto. */}
          return <li key={product.id}>{product.nome}</li>;
        })}
    </div>
  );
};

export default Produto; // Está exportando o componente Produto.
