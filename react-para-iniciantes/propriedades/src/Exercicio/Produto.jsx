// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Produto que recebe uma desestruturação responsável por retornar o nome e as propriedades que foi passada no componente presente no arquivo Produtos.jsx.
const Produto = ({ nome, propriedades }) => {
  // Retorna uma div com um H1 contendo o nome que foi passado no parâmetro nome e uma ul com as propriedades que foi passada no parâmetro propriedades.
  return (
    // O style recebe um objeto com as propriedades de border, padding e margin.
    <div
      style={{
        border: "1px solid",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <h1>{nome}</h1>

      <ul>
        {/* O map percorre o array proprieades e retorna uma li para cada propriedade. */}
        {propriedades.map((propriedade) => (
          // O key recebe a propriedade que está sendo percorrida e atribui como texto do li a propriedade que está sendo percorrida.
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto; // Está exportando o componente Produto.
