// Importa a biblioteca React.
import React from "react";

// Criado uma função chamada operationSlow responsável por fazer um cálculo lento.
function operationSlow() {
  let c; // Criado uma variável chamada c.

  // Criado um laço de repetição que vai de 0 até 100000000.
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10; // A variável c recebe o valor de i + i / 10.
  }
  return c; // Retorna o valor da variável c.
}

// Criado um componente chamado App.
const App = () => {
  const [count, setCount] = React.useState(0); // Criado um estado chamado count e setCount para alterar o estado count, começa com o valor 0.

  localStorage.setItem("produto", "notebook"); // Está armazenando um valor no localStorage, ele recebe dois parâmetros, o primeiro é o nome da chave e o segundo é o valor.

  //* > useMemo.

  // O useMemo é responsável por memorizar um valor. Recebe um array de dependências, quando o valor de uma das dependências for alterado, a função será executada novamente, nese caso não temos dependências, então a função será executada apenas uma vez.
  const value = React.useMemo(() => {
    const localItem = localStorage.getItem("produto"); // Está puxando o valor armazenado no localStorage e armazenando na variável localItem.
    console.log("Aconteceu o memo"); // Está imprimindo no console a mensagem Aconteceu o memo.
    return localItem; // Está retornando o valor armazenado na variável localItem.
  }, []);
  console.log(value); // Imprime no console o valor armazenado na variável value sempre que o componente for renderizado.

  // Criado uma função chamada handleClick responsável por alterar o estado count.
  function handleClick() {
    setCount(count + 1); // Altera o estado count para count + 1.
  }

  //* > Código mais rápido com useMemo.

  const time = performance.now(); // Está armazenando na variável time o tempo atual da operação.

  // const operation = operationSlow(); // Imprime no console o valor da função operationSlow.

  const operation = React.useMemo(() => operationSlow(), []); // Está memorizando o valor da função operationSlow e armazenando na variável operation, só será executado uma vez, pois não tem dependências.

  console.log(performance.now() - time); // Imprime no console quanto tempo demorou para executar a função operationSlow utilizando o useMemo.

  // Retorna um elemento div com um botão que ao ser clicado executa a função handleClick.
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
