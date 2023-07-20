// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import { GlobalContext } from "./GlobalContext";

// Criado um componente chamado Produto2.
const Produto2 = () => {
  const global = React.useContext(GlobalContext); // O useContext está recebendo o objeto GlobalContext e seus value.

  console.log(global); // Imprime no console o objeto global.

  // Função chamada handleClick responsável por adicionar 1 ao estado count.
  function handleClick() {
    global.setCount((prevCount) => prevCount + 1); // Está acessando a função setCount que está dentro do objeto global(no caso no value do GlobalContext) e está atualizando o estado count, passando o valor anterior e somando com mais 1.
  }

  // Retorna um elemento div com um elemento h1, um elemento p e três elementos button. O h1 está mostrando o valor do estado count. O p está mostrando o valor do estado count. Os botões estão chamando a função handleClick quando forem clicados.
  return (
    <div>
      <h1>Produto</h1>
      <p>Total: {global.count}</p>
      <button onClick={handleClick}>Adicionar</button>

      <button onClick={() => global.addOne()}>Adicionar 1</button>
      <button onClick={() => global.addTwo()}>Adicionar 2</button>
    </div>
  );
};

export default Produto2; // Está exportando o componente Produto2.
