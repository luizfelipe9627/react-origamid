// Está importando a biblioteca React e ReactDOM.
import React from "react";
import ReactDOM from "react-dom/client";

// Está importando o componente App.
import App from "./App";

// Está renderizando o componente App dentro do elemento root que está no index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  // O React.StrictMode serve para ativar verificações de segurança e ativar avisos no console.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
