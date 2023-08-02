// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Exemplo from "./Exemplo";

// Criado uma função chamada reducer que recebe dois parâmetros, state e action, o state é o estado atual e o action é a ação que será executada, no caso é aumentar ou diminuir.
function reducer(state, action) {
  // Criado um switch que recebe o valor do action, se o valor for aumentar ele retorna o state + 1, se o valor for diminuir ele retorna o state - 1, se não for nenhum dos dois ele retorna um erro.
  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      throw new Error(); // Retorna um erro.
  }
}

// Criado um componente chamado App.
const App = () => {
  const [state, dispath] = React.useReducer(reducer, 0); // Criado um estado chamado state e uma função chamada dispath que altera o estado state, o estado inicial é 0. O useReducer recebe dois parâmetros, o primeiro é uma função e o segundo é o estado inicial.

  // Retorna uma div com 3 botões, o primeiro botão ao clicar executa a função dispath com o valor aumentar, o segundo botão ao clicar executa a função dispath com o valor diminuir e o terceiro botão está importando o componente Exemplo.
  return (
    <div>
      {/* Criado um botão que ao clicar atualiza o estado state para + 1. */}
      <button onClick={() => dispath("aumentar")}>+</button>

      <span style={{ margin: "0 1rem" }}>{state}</span>

      {/* Criado um botão que ao clicar atualiza o estado state para - 1 */}
      <button onClick={() => dispath("diminuir")}>-</button>

      <Exemplo />
    </div>
  );
};

export default App; // Está exportando o componente App.
