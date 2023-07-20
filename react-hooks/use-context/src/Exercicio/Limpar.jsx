// Importa o React.
import React from "react";

// Importa o componente GlobalContext.
import { GlobalContext } from "./GlobalContext";

// Criado um componente chamado Limpar.
const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext); // O useContext está recebendo o objeto GlobalContext e desestruturando a função limparDados.

  // Retorna um botão com a função limparDados responsável por limpar os dados do estado dados.
  return <button onClick={limparDados}>Limpar dados</button>;
};

export default Limpar; // Está exportando o componente Limpar.
