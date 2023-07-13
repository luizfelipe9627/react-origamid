// Importa o React.
import React from "react";

// Importa os componentes.
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

// Criado um componente chamado Teste.
const Teste = () => {
  const active = false;
  // Verifica se a variável active é verdadeira, se for executa o if, se não executa o else.
  if (active) {
    // Retorna um parágrafo com o texto "Teste".
    return <p>Teste</p>;
  } else {
    // Não retorna nada, sendo assim, não renderizada nada na tela.
    return null;
  }
};

// Criado um componente chamado App.
const App = () => {
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      {/* Chama o componente Teste. */}
      <Teste />
      {/* Chama o componente Header. */}
      <Header />
      {/* Chama o componente Form. */}
      <Form />
      <Form />
      {/* Chama o componente Footer. */}
      <Footer />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
