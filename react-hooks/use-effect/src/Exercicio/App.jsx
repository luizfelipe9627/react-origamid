// Está importando o React.
import React from "react";

// Está importando o componente Produtos.
import Produtos from "./Produtos";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo:
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js). Defina o produto clicado como uma preferência do usuário no localStorage. Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

// Está criando um componente chamado App.
const App = () => {
  const [produto, setProduto] = React.useState(null); // Criado um state(estado) chamado produto e uma função chamada setProduto para atualizar o valor do state(estado).

  // O useEffect será executado toda vez que o componente for renderizado, atualizado ou executado, mas somente quando o valor do state(estado) produto for alterado.
  React.useEffect(() => {
    // Se o produto for diferente de null, então será adicionado o produto no localStorage.
    if (produto !== null) {
      window.localStorage.setItem("produto", produto); // Está adicionando o produto como chave e o valor do produto como valor no localStorage.
    }
  }, [produto]);

  // O useEffect será executado toda vez que o componente for renderizado, atualizado ou executado, mas somente quando o componente for renderizado pela primeira vez.
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto"); // Criado uma constante chamada produtoLocal que recebe o valor do produto no localStorage.

    // Se o produtoLocal for diferente de null, então será atualizado o valor do state(estado) produto.
    if (produtoLocal !== null) {
      setProduto(produtoLocal); // Está atualizando o valor do state(estado) produto, pegando o localStorage e adicionando no state(estado) produto.
    }
  }, []);

  // Está criando uma função chamada handleClick que recebe o evento como parâmetro responsável por atualizar o valor do state(estado) produto.
  function handleClick({ target }) {
    setProduto(target.innerText); // Está atualizando o valor do state(estado) produto, pegando o texto do botão e adicionando no state(estado) produto.
  }

  return (
    <React.Fragment>
      <h1>Preferência: {produto}</h1>

      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        smartphone
      </button>

      {/* Está chamando o componente Produtos e passando o produto como parâmetro. */}
      <Produtos produto={produto} />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
