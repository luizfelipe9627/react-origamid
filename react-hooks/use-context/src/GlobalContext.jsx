// Importa a biblioteca React.
import React from "react";

const GlobalContext = React.createContext(); // O createContext é usado para criar um contexto, que é um objeto que contém um valor que pode ser acessado por outros componentes.

// Criado um componente chamado GlobalStorage que recebe uma desestruturação do objeto children.
const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0); // Criado um estado chama count e uma função que altera o estado chamada setCount, que recebe o valor inicial 0.

  // Função chamada addOne responsável por adicionar 1 ao estado count.
  function addOne() {
    setCount((prevCount) => prevCount + 1); //Está atualizando o estado count, passando o valor anterior e somando com mais 1.
  }

  // Função chamada addTwo responsável por adicionar 2 ao estado count.
  function addTwo() {
    setCount((prevCount) => prevCount + 2); //Está atualizando o estado count, passando o valor anterior e somando com mais 1.
  }

  // Retorna o componente GlobalContext.Provider que é usado para fornecer um valor para todos os componentes que estão dentro dele. O valor é passado através do atributo value, nesse caso o valor é um objeto com a propriedade count e o valor count, setCount, addOne e addTwo.
  return (
    <GlobalContext.Provider value={{ count, setCount, addOne, addTwo }}>
      {/* O children mostra os componentes que estão dentro do GlobalStorage no App.jsx. */}
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalStorage }; // Está exportando o objeto GlobalContext e o componente GlobalStorage.
