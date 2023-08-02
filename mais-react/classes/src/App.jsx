// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Produtos from "./Produtos";

// Criado um componente chamado App.
const App = () => {
  const [active, setActive] = React.useState(true); // Criado um estado chamado active e uma função para atualizar o estado chamada setActive, o valor inicial do estado é true.

  // Retorna uma div com um botão que ao ser clicado chama uma função que atualiza o estado active, passando o valor contrário do estado atual a cada clique.
  return (
    <div>
      {/* Renderiza o componente Produtos caso o estado active seja true. */}
      {active && <Produtos titulo="Meus produtos" />}
      {/* Cria um botão que ao ser clicado chama uma função que atualiza o estado active, passando o valor contrário do estado atual a cada clique. */}
      <button onClick={() => setActive(!active)}>Toggle</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
