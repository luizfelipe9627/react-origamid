// Importa a biblioteca React.
import React from "react";

// Criado uma função chamada reducer que recebe dois parâmetros, state e action, o state é o estado atual e o action é a ação que será executada, no caso é adicionar ou remover.
function reducer(state, action) {
  // Criado um switch que recebe o type do action, se o type for remover ele retorna o state sem o conteúdo, se o type for adicionar ele retorna o state com o conteúdo, se não for nenhum dos dois ele retorna um erro.
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content); // O filter está percorrendo o state e retornando uma array nova todos os itens que são diferentes do content do action.
    case "adicionar":
      return [...state, action.content]; // O spread operator está criando uma array nova com todos os itens do state e adicionando o content do action.
    default:
      throw new Error(); // Retorna um erro.
  }
}

// Criado um componente chamado Exemplo.
const Exemplo = () => {
  const [state, dispath] = React.useReducer(reducer, ["Banana", "Uva"]); // Criado um estado chamado state e uma função chamada dispath que altera o estado state, o estado inicial é uma array com 2 elementos. O useReducer recebe dois parâmetros, o primeiro é uma função e o segundo é o estado inicial.

  // Retorna uma div com 2 botões, o primeiro botão ao clicar executa a função dispath com o valor remover e o segundo botão ao clicar executa a função dispath com o valor adicionar.
  return (
    <div>
      {/* Criado um botão que ao clicar cria um objeto com o type e o content, o type é o tipo de ação que será executada e o content é o conteúdo que será executado, no caso é adicionar Banana. Retorna para a função reducer o action o type e o content. */}
      <button onClick={() => dispath({ type: "remover", content: "Banana" })}>
        Remover Banana
      </button>

      {/* Criado um botão que ao clicar cria um objeto com o type e o content, o type é o tipo de ação que será executada e o content é o conteúdo que será executado, no caso é adicionar Limão. Retorna para a função reducer o action o type e o content. */}
      <button onClick={() => dispath({ type: "adicionar", content: "Limão" })}>
        Adicionar Limão
      </button>

      {state}
    </div>
  );
};

export default Exemplo; // Está exportando o componente Exemplo.
