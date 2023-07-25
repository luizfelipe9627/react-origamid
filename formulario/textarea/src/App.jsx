// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  const [textarea, setTextarea] = React.useState(""); // Criado um estado com o nome textarea e uma função com o nome setTextarea para atualizar o estado. Começa por padrão com uma string vazia.

  // Retorna um formulário com um textarea com o valor do estado textarea, o evento onChange que chama a função setTextarea passando o valor do target(elemento clicado) e o evento onBlur que chama a função setTextarea passando o valor do target(elemento clicado).
  return (
    <form>
      <textarea
        // O textarea recebe o valor do estado textarea(que começa com uma string vazia), e quando o usuário digitar algo, o estado textarea é atualizado com o valor digitado.
        value={textarea}
        // O cols é usado para definir a largura do textarea em caracteres.
        cols="30"
        // O rows é usado para definir a altura do textarea em linhas.
        rows="10"
        // O onChange está chamando uma função que está recebendo a desestruturação do evento target e chamando a função setTextarea para atualizar o estado textarea com o valor(do que é digitado) do input.
        onChange={({ target }) => setTextarea(target.value)}
      />
    </form>
  );
};

export default App; // Está exportando o componente App.
