// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  const [checkbox, setCheckbox] = React.useState(false); // Criado um estado chamado checkbox e uam função setCheckbox para alterar o estado. O estado inicial do checkbox é false.
  const [colors, setColors] = React.useState(["vermelho"]); // Criado um estado chamado colors e uma função setColors para alterar o estado. O estado inicial do colors é o valor vermelho dentro de uma array.

  // Função chamada handleChange que recebe o evento e desestrutura o target do evento para usar o valor do target.
  function handleChange({ target }) {
    // Se o target(elemento clicado) for checado então executa o bloco de código do if.
    if (target.checked) {
      setColors([...colors, target.value]); // O estado colors recebe uma array com os valores anteriores do estado colors e o valor do target(elemento clicado) atual.
    } else {
      setColors(colors.filter((color) => color !== target.value)); // O filter está sendo usado para filtrar os valores do estado colors, se o valor do estado colors for diferente do valor do target(elemento clicado) então retorna true e o valor é mantido na array, se o valor do estado colors for igual ao valor do target(elemento clicado) então retorna false e o valor é removido da array.
    }
  }

  // Retorna uma div com o texto App React.
  return (
    <React.Fragment>
      <h1>Checkbox único</h1>
      <form>
        {/* Se o checkbox for true então será renderizado o parágrafo com o texto Aceitou os termos. */}
        {checkbox && <p>Aceitou os termos</p>}
        <label>
          <input
            type="checkbox"
            // O value está sendo usado para passar o valor do estado colors para o target.
            value="termos"
            // O atributo checked é usado para marcar o checkbox como checado ou não, passa o valor do estado checkbox então se o checkbox for true o checkbox será marcado.
            checked={checkbox}
            // O evento onChange é disparado quando o valor do input é alterado, desestrutura o evento para usar o target e chama a função setCheckbox passando o valor do target atualizando o estado do checkbox.
            onChange={({ target }) => setCheckbox(target.checked)}
          />
          Li e aceito os termos.
        </label>
      </form>

      <h1>Checkbox múltiplo</h1>

      <form>
        <label>
          <input
            type="checkbox"
            // O value está sendo usado para passar o valor do estado colors para o target.
            value="azul"
            // O atributo checked é usado para marcar o checkbox como checado ou não, passa o valor do estado colors e usa o includes para verificar se o valor passado está dentro do estado colors se estiver retorna true e marca o checkbox se não retorna false e desmarca o checkbox.
            checked={colors.includes("azul")}
            // Quando o evento onChange é disparado executa a função handleChange responsável por atualizar o estado colors.
            onChange={handleChange}
          />
          Azul
        </label>

        <label>
          <input
            type="checkbox"
            // O value está sendo usado para passar o valor do estado colors para o target.
            value="vermelho"
            // O atributo checked é usado para marcar o checkbox como checado ou não, passa o valor do estado colors e usa o includes para verificar se o valor passado está dentro do estado colors se estiver retorna true e marca o checkbox se não retorna false e desmarca o checkbox.
            checked={colors.includes("vermelho")}
            // Quando o evento onChange é disparado executa a função handleChange responsável por atualizar o estado colors.
            onChange={handleChange}
          />
          Vermelho
        </label>
      </form>
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
