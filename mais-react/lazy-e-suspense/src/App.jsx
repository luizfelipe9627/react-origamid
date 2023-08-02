// Importa a biblioteca React.
import React from "react";

// O React.lazy() é um componente que permite renderizar um componente somente quando ele for necessário.
const Contato = React.lazy(() => import("./Contato"));

// Criado um componente chamado App.
const App = () => {
  const [active, setActive] = React.useState(false); // Cria um estado chamado active e uma função chamada setActive para alterar o estado active. O estado active é inicializado com o valor false.

  // Retorna um elemento div com um botão e um componente Contato.
  return (
    <div>
      {/* Se o estado active for true, então renderiza o componente Contato. */}
      {active && (
        // O React.Suspense é usado para envolver o componente que será carregado de forma tardia, ou seja, o componente que será carregado somente quando for necessário.
        // O fallback é o componente que será renderizado enquanto o componente que será carregado de forma tardia não for carregado. */}
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      {/* Cria um botão que ao ser clicado, chama a função setActive passando o valor true como parâmetro, fazendo assim todo o componente Contato ser renderizado, incluindo o jQuery. */}
      <button onClick={() => setActive(true)}>Ativar</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
