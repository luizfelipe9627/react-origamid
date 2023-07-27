// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Produto from "./Produto";

// Importa o arquivo CSS.
import "./App.css";

// Criado um componente chamado App.
const App = () => {
  const [active, setActive] = React.useState(false); // Cria um estado chamado active e uma função chamada setActive para alterar o estado. O estado inicial é false.

  // Retorna uma div com um botão e o componente Produto.
  return (
    <div>
      {/* Quando clicar no botão, altera o estado de active para true caso seja false ou para false caso seja true. */}
      <button onClick={() => setActive(!active)}>Ativar</button>

      {/* Se active for true, então renderiza o componente Produto. */}
      {active && <Produto />}
    </div>
  );
};

export default App; // Está exportando o componente App.
