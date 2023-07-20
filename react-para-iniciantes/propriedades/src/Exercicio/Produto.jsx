// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Produto que recebe uma desestruturação responsável por retornar o name e as properties que foi passada no componente presente no arquivo Produtos.jsx.
const Produto = ({ name, properties }) => {
  // Retorna uma div com um H1 contendo o name que foi passado no parâmetro name e uma ul com as properties que foi passada no parâmetro properties.
  return (
    // O style recebe um objeto com as properties de border, padding e margin.
    <div
      style={{
        border: "1px solid",
        padding: "1rem",
        margin: "1rem 0",
      }}
    >
      <h1>{name}</h1>

      <ul>
        {/* O map percorre o array proprieades e retorna uma li para cada properties. */}
        {properties.map((properties) => (
          // O key recebe a properties que está sendo percorrida e atribui como texto do li a properties que está sendo percorrida.
          <li key={properties}>{properties}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto; // Está exportando o componente Produto.
