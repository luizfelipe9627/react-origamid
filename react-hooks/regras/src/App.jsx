// Importa a biblioteca React.
import React from "react";

//* Regras dos Hooks.

// Para o useEffect não retornar um erro falando que não pode utilizar hooks dentro de uma função, é só criar um hook utilizando o "use" antes do nome da função.
function useRandomNumber() {
  // Não irá dar erro, pois foi criado um hook utilizando o "use" antes do nome da função.
  React.useEffect(() => {
    document.title = Math.random() * 50;
  }, []);
}

// Criado uma função chamada randomNumber responsável por atualizar o título da página com um número aleatório.
function randomNumber() {
  // Irá retornar um erro falando que não pode utilizar hooks dentro de uma função, pois não foi criado um hook utilizando o "use" antes do nome da função.
  React.useEffect(() => {
    document.title = Math.random() * 100;
  }, []);
}

// Criado um componente chamado App.
const App = () => {
  // Invoca as funções useRandomNumber e randomNumber.
  useRandomNumber();
  randomNumber();
};

export default App; // Está exportando o componente App.
