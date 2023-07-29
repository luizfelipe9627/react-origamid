// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { useLocation, useParams } from "react-router-dom";

// Criado um componente chamado Produto.
const Produto = () => {
  const params = useParams(); // O useParams é um hook que retorna os parâmetros da rota dinâmica, ou seja, retorna o id que foi passado na rota.

  const location = useLocation(); // O useLocation é um hook que retorna o objeto location que contém informações sobre a rota atual.
  const search = new URLSearchParams(location.search); // O search é um objeto que contém os parâmetros da url da rota atual.
  
  console.log(search.get("q")); // O método get retorna o valor do parâmetro passado na url da rota atual, então se a url for: http://localhost:3000/produto/notebook?q=notebook, o método get vai retornar notebook.

  // Retorna uma div com um título.
  return (
    <div>
      {/* Está mostrando o id que foi passado na rota dinâmica. */}
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto; // Está exportando o componente Produto.
