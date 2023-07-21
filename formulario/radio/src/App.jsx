// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  const [radio, setRadio] = React.useState(""); // Criado um estado chamado radio e uma função setRadio para alterar o estado radio. O estado radio está recebendo uma string vazia como valor inicial.
  const [color, setColor] = React.useState(""); // Criado um estado chamado color e uma função setColor para alterar o estado color. O estado color está recebendo uma string vazia como valor inicial.

  // Retorna uma div com o texto App React.
  return (
    <form>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          value="smartphone"
          // O checked está recebendo uma expressão que verifica se o estado radio é igual a smartphone, se for igual retorna true deixando o radio selecionado, se não retorna false deixando o radio desmarcado.
          checked={radio === "smartphone"}
          // Quando houver uma mudança no radio o onChange vai executar o callback passando o evento target como parâmetro e atualizando o estado radio com o valor do evento target(valor do radio selecionado).
          onChange={({ target }) => setRadio(target.value)}
        />
        Smartphone
      </label>

      <label>
        <input
          type="radio"
          value="notebook"
          // O checked está recebendo uma expressão que verifica se o estado radio é igual a notebook, se for igual retorna true deixando o radio selecionado, se não retorna false deixando o radio desmarcado.
          checked={radio === "notebook"}
          // Quando houver uma mudança no radio o onChange vai executar o callback passando o evento target como parâmetro e atualizando o estado radio com o valor do evento target(valor do radio selecionado).
          onChange={({ target }) => setRadio(target.value)}
        />
        Notebook
      </label>

      <h2>Cores</h2>
      <label>
        <input
          name="color" // O name é utilizado para agrupar os radios assim quando um radio for selecionado o outro é desmarcado, assim não precisando usar o checked.
          type="radio"
          value="azul"
          // Quando houver uma mudança no radio o onChange vai executar o callback passando o evento target como parâmetro e atualizando o estado radio com o valor do evento target(valor do radio selecionado).
          onChange={({ target }) => setColor(target.value)}
        />
        Azul
      </label>

      <label>
        <input
          name="color" // O name é utilizado para agrupar os radios assim quando um radio for selecionado o outro é desmarcado, assim não precisando usar o checked.
          type="radio"
          value="vermelho"
          // Quando houver uma mudança no radio o onChange vai executar o callback passando o evento target como parâmetro e atualizando o estado radio com o valor do evento target(valor do radio selecionado).
          onChange={({ target }) => setColor(target.value)}
        />
        Vermelho
      </label>
    </form>
  );
};

export default App; // Está exportando o componente App.
