// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Form1.
const Form1 = () => {
  //* > Utilizando o useState com strings.

  const [name, setName] = React.useState(""); // Cria um estado com o nome name e uma função com o nome setName para atualizar o estado. Começa por padrão com uma string vazia.
  const [email, setEmail] = React.useState(""); // Cria um estado com o nome email e uma função com o nome setEmail para atualizar o estado. Começa por padrão com uma string vazia.

  const [form, setForm] = React.useState({ name: "", email: "" }); // Cria um estado com o nome form e uma função com o nome setForm para atualizar o estado. Começa por padrão com um objeto que tem como propriedades name e email com valor vazio.

  // Criado uma função chamada handleSubmit responsável por mostrar no console o evento, está recebendo um evento como parâmetro.
  function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é enviar os dados para uma outra página.
    console.log(event);
  }

  // Retorna o formulário com dois inputs e um botão.
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

      {/* O htmlFor está adicionando um for no elemento, responsável por fazer a ligação entre o label e o input. */}
      <label htmlFor="email">Email</label>
      <input
        // O id está adicionando um id no elemento, responsável por fazer a ligação entre o label e o input. */}
        id="email"
        // O name é usado para identificar o input, muito útil para quando for enviar o formulário para aparecer o nome do input e o valor digitado na URL.
        name="email"
        // O type está definindo o tipo do input como texto.
        type="email"
        // O value está recebendo o valor do estado name
        value={email}
        // O onChange está chamando uma função que está recebendo a desestruturação do evento target e chamando a função setName para atualizar o estado name com o valor(do que é digitado) do input.
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Form1; // Está exportando o componente Form1.
