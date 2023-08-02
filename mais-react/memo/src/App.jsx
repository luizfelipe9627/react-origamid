// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Header from "./Header";

// Criado um componente chamado App.
const App = () => {
  const [counter, setCounter] = React.useState(0); // Cria um estado chamado counter e uma função chamada setCounter para alterar o estado counter. O estado counter é inicializado com o valor 0.

  // Retorna um elemento div com um botão e o componente Header.
  return (
    <div>
      {/* Renderiza o componente Header, se for passado o valor counter como propriedade para o componente Header, então o componente Header será renderizado a cada clique no botão. */}
      <Header />
      {/* Cria um botão que ao ser clicado, chama a função setCounter passando o valor counter + 1 como parâmetro, fazendo assim o estado counter ser alterado e o componente Header ser renderizado a cada clique. */}
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
