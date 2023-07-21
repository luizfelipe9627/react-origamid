// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Form1.
const Form1 = () => {
  //* > Utilizando o useState com objetos.

  const [form, setForm] = React.useState({ name: "", email: "" }); // Cria um estado com o nome form e uma função com o nome setForm para atualizar o estado. Começa por padrão com um objeto que tem como propriedades name e email com valor vazio.

  // Criado uma função chamada handleSubmit responsável por mostrar no console o evento, está recebendo um evento como parâmetro.
  function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é enviar os dados para uma outra página.
    console.log(event);
  }

  // Criado uma função chamada handleChange responsável por atualizar o estado form, está recebendo um evento target como parâmetro.
  function handleChange({ target }) {
    const { id, value } = target; // Desestruturação do evento target, pegando o id e o valor do input.
    setForm({ ...form, [id]: value }); // Pega os valores antigos do estado form e adiciona um novo valor no estado form, o id é o nome da propriedade do objeto form e o value é o valor da propriedade do objeto form.
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
        // O value está recebendo o valor do estado name presente no objeto form.
        value={form.name}
        // O onChange está chamando uma função que está recebendo a desestruturação do evento target e chamando a função setName para atualizar o estado name com o valor(do que é digitado) do input.
        onChange={handleChange}
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
        // O value está recebendo o valor do estado email presente no objeto form.
        value={form.email}
        // O onChange está chamando uma função que está recebendo a desestruturação do evento target e chamando a função setName para atualizar o estado name com o valor(do que é digitado) do input.
        onChange={handleChange}
      />

      <button>Enviar</button>
    </form>
  );
};

export default Form1; // Está exportando o componente Form1.
