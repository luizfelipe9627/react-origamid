// Está importando a biblioteca ReactDOM.
import ReactDOM from "react-dom/client";

// Está importando os componentes.
import App from './App.jsx';
// import Exercise from "./Exercise.jsx";

// Está renderizando o componente App no elemento com o ID root do HTML.
// App.jsx é o componente de anotações utilizado em aula.
// Execise.jsx é o componente de exercício.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
