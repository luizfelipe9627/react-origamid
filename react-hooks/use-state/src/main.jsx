// Está importando a biblioteca ReactDOM.
import ReactDOM from "react-dom/client";

// Está importando o React.
import React from "react";

// Está importando o componente.
import App from "./App.jsx";
// import Exercise from "./Exercicio/Exercicio.jsx";

// Está renderizando o componente App no elemento com o ID root do HTML.
// App.jsx é o componente de anotações utilizado em aula.
// Execise.jsx é o componente de exercício.
ReactDOM.createRoot(document.getElementById("root")).render(
  // O React.StrictMode serve para ativar verificações de segurança e ativar avisos no console.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
