// Importa o React.
import React from "react";

// Importa os componentes criados.
import UseState1 from "./UseState1";
import UseState2 from "./UseState2";
import Modal from "./Modal/Modal";

// Criado um componente chamado App.
const App = () => {
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      <h1>UseState 1</h1>
      <UseState1 />

      <h1>Modal</h1>
      <Modal />

      <h1>UseState 2</h1>
      <UseState2 />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
