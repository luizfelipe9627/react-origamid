// Importa a biblioteca React.
import React from "react";

// Criado um hook chamado useFetch responsável por fazer requisições HTTP.
const useFetch = () => {
  const [data, setData] = React.useState(null); // Cria um estado com o nome data e uma função com o nome setData para atualizar o estado. O useState está sendo usado para armazenar o valor da requisição.
  const [error, setError] = React.useState(null); // Cria um estado com o nome error e uma função com o nome setError para atualizar o estado. O useState está sendo usado para armazenar o valor do erro.
  const [loading, setLoading] = React.useState(null); // Cria um estado com o nome loading e uma função com o nome setLoading para atualizar o estado. O useState está sendo usado para armazenar o valor do carregamento.

  // O useCallback está memorizando a função para não ser recriada/repetida toda vez que o componente for atualizado, pois o array de dependências está vazio.
  const requestAPI = React.useCallback(async (url, options) => {
    let response; // Cria uma variável com o nome response.
    let json; // Cria uma variável com o nome json.

    // O try vai tentar executar o código abaixo, caso ocorra algum erro, o catch irá capturar o erro.
    try {
      setError(null); // Está atualizando o estado error para null para não mostrar o erro caso ocorra quando a requisição for feita novamente.

      setLoading(true); // Está atualizando o estado loading para true.

      // O fetch está recebendo a url para fazer a requisição e as opções da requisição como get, post, put, delete, etc.
      response = await fetch(url, options); // O await está esperando a requisição ser feita para armazenar o valor na variável fetchAPI.
      // Pega a resposta da requisição e transforma em JSON.
      json = await response.json(); // O await está esperando a resposta da requisição ser convertida para JSON para armazenar o valor na variável json.

      // O catch sera executado caso ocorra algum erro no try.
    } catch (erro) {
      setError("Erro"); // O valor do erro está sendo armazenado no estado error.
      json = null; // Está definindo o valor da variável json como null.

      // O finally está executando o código abaixo independente se ocorreu erro ou não.
    } finally {
      setData(json); // O valor da variável json está sendo armazenado no estado data.
      setLoading(false); // Está atualizando o estado loading para false.
      return { response, json }; // Está retornando a resposta da requisição e a resposta convertida para JSON.
    }
  }, []);

  // Retorna como objeto o estado data, o estado error e o estado loading e a variável requestAPI que contém a função para fazer a requisição. Foi retornado como objeto pois pode ser pego apenas o estado que for necessário, diferente de arrays que precisam ser pegos todos os estados.
  return { data, error, loading, requestAPI };
};

export default useFetch; // Está exportando o hook useFetch.
