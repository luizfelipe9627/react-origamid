// Está importando o React.
import React from "react";

// Está criando um componente chamado Produtos.
const Produtos = ({ produto }) => {
  const [dados, setDados] = React.useState(null); // O useState é um Hook que permite adicionar o state do React a um componente de função. Ele retorna um array com 2 posições, a primeira é o valor do state(estado) e a segunda é uma função para atualizar o valor do state(estado).

  // O useEffect será executado toda vez que o componente for renderizado, atualizado ou executado, mas somente quando o valor do state(estado) produto for alterado.
  React.useEffect(() => {
    // Se o produto for diferente de null, então será feito uma requisição para a API.
    if (produto !== null) {
      // O fetch é uma API que serve para fazer requisições HTTP, ele é baseado em Promises.
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        // O then retorna a resposta da requisição e transforma em JSON.
        .then((response) => response.json())
        // O then retorna o JSON da requisição e atualiza o valor do state(estado) dados para o JSON da requisição.
        .then((json) => setDados(json));
    }
  }, [produto]);

  // Se o valor do state(estado) dados for diferente de null, então será retornado o nome e o preço do produto, senão será retornado null.
  if (dados !== null) {
    return (
      <div>
        <h2>{dados.nome}</h2>
        <p>R$ {dados.preco}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Produtos; // Está exportando o componente Produtos.
