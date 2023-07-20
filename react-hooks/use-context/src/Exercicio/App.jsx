// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";
import Limpar from "./Limpar";

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// Assim que o usuário acessar o app coloque os dados da API no contexto global, dando acesso aos dados da mesma, defina uma função chamada limparDados que é responsável por zerar os dados de produto e exponha essa função no contexto global.

// Criado um componente chamado App.
const App = () => {
  // O componente App está retornando o componente GlobalStorage que está recebendo os componentes Produto e Limpar.
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App; // Está exportando o componente App.
