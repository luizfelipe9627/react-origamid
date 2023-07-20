// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import UserContext from "./UserContext";
import Produto1 from "./Produto1";
import Produto2 from "./Produto2";

import { GlobalStorage } from "./GlobalContext";

// Criado um componente chamado App.
const App = () => {
  console.log(UserContext); // Imprime no console o objeto UserContext.

  return (
    // Retorna o componente React.Fragment que é usado para retornar mais de um elemento, nesse caso está retornando o componente Produto1 e o componente Produto2.
    <React.Fragment>
      {/* O UserContext.Provider é usado para fornecer um valor para todos os
      componentes que estão dentro dele. O valor é passado através do atributo
      value, nesse caso o valor é um objeto com a propriedade name e o valor
      Luiz. */}
      <UserContext.Provider value={{ name: "Luiz" }}>
        <Produto1 />
      </UserContext.Provider>

      {/* O GlobalStorage é um componente que recebe uma desestruturação do objeto children. */}
      <GlobalStorage>
        <Produto2 />
      </GlobalStorage>
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
