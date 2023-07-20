// Importa a biblioteca React.
import React from "react";

// Importa o componenete UserContext.
import UserContext from "./UserContext";

// Criado um componente chamado Produto1.
const Produto1 = () => {
  const data = React.useContext(UserContext); // O useContext é usado para acessar o contexto que foi criado, nesse caso o UserContext.

  console.log(data); // Imprime no console o objeto UserContext com o valor passado no atributo value do componente App.

  // Retorna uma div com o valor da propriedade name do objeto UserContext.
  return <div>{data.name}</div>;
};

export default Produto1; // Está exportando o componente Produto1.
