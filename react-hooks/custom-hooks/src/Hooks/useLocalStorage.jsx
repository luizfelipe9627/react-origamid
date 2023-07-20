// Importa a biblioteca React.
import React from "react";

// Criado um hook chamado useLocalStorage responsável por armazenar valores no localStorage.
const useLocalStorage = (key, initial) => {
  // Cria um estado com o nome state e uma função com o nome setState para atualizar o estado. O useState está sendo usado para armazenar o valor do localStorage.
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key); // Pega a chave do localStorage passada por parâmetro e armazena na variável local.
    return local ? local : initial; // Se a variável local for verdadeira, retorna o valor dela, caso contrário, retorna o valor passado por parâmetro.
  });

  // O useEffect irá executar seu escopo toda vez que o estado e a chave passada por parâmetro forem alterados.
  React.useEffect(() => {
    window.localStorage.setItem(key, state); // Cria uma chave no localStorage com o nome passado por parâmetro e armazena o valor do estado.
  }, [state, key]);

  // Retorna o estado e a função para atualizar o estado.
  return [state, setState];
};

export default useLocalStorage; // Está exportando o hook useLocalStorage.
