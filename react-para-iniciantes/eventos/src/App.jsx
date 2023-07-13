import React from "react"; // Importa o React.

// Criado um componente chamado App.
const App = () => {
  // Criado uma função chamada handleClick responsável por imprimir no console o elemento que foi clicado.
  function handleClick(event) {
    console.log(event.currentTarget); // Imprime no console o elemento que foi clicado.
  }

  window.addEventListener("scroll", handleScroll); // Adiciona um evento de scroll na janela do navegador que ao ser acionado executa a função handleScroll.

  // Criado uma função chamada handleScroll responsável por imprimir no console a palavra Scroll.
  function handleScroll(event) {
    console.log(event); // Imprime no console a palavra Scroll.
  }

  return (
    // Criado um elemento div com a propriedade style que define a altura da div como 200vh.
    <div style={{ height: "200vh" }}>
      {/* Criado um botão que ao clicar executa a função anônima que imprime no console o elemento que foi clicado. */}
      <button onClick={(event) => console.log(event.currentTarget)}>
        Clique
      </button>
      {/* Criado um botão que ao passar o mouse executa a função handleClick. */}
      <button onMouseMove={handleClick}>Passe o mouse</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
