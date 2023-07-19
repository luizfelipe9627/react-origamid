// Importa a biblioteca React.
import React from "react";

// Importa o componente Produtos.
import Produtos from "./Produtos";

// Criado um componente chamado App.
const App = () => {
  const [count, setCount] = React.useState(0); // Criado um estado chamado count e setCount para alterar o estado count, começa com o valor 0.

  // Retorna um elemento div com o componente Produtos e um botão que ao ser clicado altera o estado count.
  return (
    <div>
      {/* Está renderizando o componente Produtos. */}
      <Produtos />
      {/* Adicionado um botão que ao clicar nele, o estado count é alterado. */}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
