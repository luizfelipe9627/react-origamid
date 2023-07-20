// Importa a biblioteca React.
import React from "react";

const GlobalContext = React.createContext(); // O createContext é usado para criar um contexto, que é um objeto que contém um valor que pode ser acessado por outros componentes.

// Criado um componente chamado GlobalStorage que recebe uma desestruturação do objeto children do componente App.
const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState(null); // Criado um estado chamado data e setData responsável por atualizar o estado data, com o valor inicial null.

  // O useEffect é responsável por
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Criado uma função chamada clearData responsável por limpar os data.
  function clearData() {
    setData(null); // O setData está recebendo o valor null, deixando o estado data vazio.
  }

  // Retorna o componente GlobalContext.Provider que está recebendo o objeto data e a função clearData para serem acessados por outros componentes como o Produto e o Limpar.
  return (
    <GlobalContext.Provider value={{ data, clearData }}>
      {/* O children está sendo usado para renderizar os componentes Produto e Limpar. */}
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalStorage }; // Está exportando o objeto GlobalContext e o componente GlobalStorage.
