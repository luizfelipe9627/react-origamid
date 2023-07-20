// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  const [name, setName] = React.useState(""); // Cria um estado com o nome name e uma função com o nome setName para atualizar o estado. O useState está sendo usado para armazenar o valor do input.

  // Criado uma função chamada handleSubmit responsável por mostrar no console o evento, está recebendo um evento como parâmetro.
  function handleSubmit(event) {
    console.log(event);
  }

  // Retorna
  return (
    <form onSubmit={handleSubmit}>
      {/* O htmlFor está adicionando um for no elemento, responsável por fazer a ligação entre o label e o input. */}
      <label htmlFor="name">Nome</label>
      <input
        // O id está adicionando um id no elemento, responsável por fazer a ligação entre o label e o input. */}
        id="name"
        // O name é usado para identificar o input, muito útil para quando for enviar o formulário para aparecer o nome do input e o valor digitado na URL.
        name="name"
        // O type está definindo o tipo do input como texto.
        type="text"
        // O value está recebendo o valor do estado name
        value={name}
        // O onChange está chamando uma função que está recebendo a desestruturação do evento target e chamando a função setName para atualizar o estado name com o valor(do que é digitado) do input.
        onChange={({ target }) => setName(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App; // Está exportando o componente App.
