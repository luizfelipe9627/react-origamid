// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  const [select, setSelect] = React.useState(""); // Criado um estado chamado select uma função para atualizar o estado chamada setSelect e o valor inicial do estado é vazio mas poderia ser qualquer outro valor como por exemplo notebook que iria aparecer selecionado no select.

  // Retorna uma div com o texto App React.
  return (
    <form>
      {/* Criado um select com o valor inicial notebook, quando o valor do select for alterado executa o onChange que pega o target(value) do elemento clicado e atualiza o estado select com o novo valor. */}
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled></option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {/* Exibe o valor do estado select. */}
      <p>{select}</p>
    </form>
  );
};

export default App; // Está exportando o componente App.
