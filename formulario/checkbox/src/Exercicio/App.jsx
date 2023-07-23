// Importa a biblioteca React.
import React from "react";

// Otimize o código do slide anterior utilizando a array abaixo para mostrar cada checkbox na tela.
const coresArray = [
  "azul",
  "azul",
  "roxo",
  "laranja",
  "verde",
  "vermelho",
  "cinza",
];

// Criado um componente chamado App.
const App = () => {
  const [colors, setColors] = React.useState([]); // Criado um estado chamado colors e uma função setColors para alterar o estado. O estado inicial do colors é o valor vermelho dentro de uma array.

  // Função chamada handleChange que recebe o evento e desestrutura o target do evento para usar o valor do target.
  function handleChange({ target }) {
    // Se o target(elemento clicado) for checado então executa o bloco de código do if.
    if (target.checked) {
      setColors([...colors, target.value]); // O estado colors recebe uma array com os valores anteriores do estado colors e o valor do target(elemento clicado) atual. O estado colors é atualizado com a nova array.
    } else {
      setColors(colors.filter((color) => color !== target.value)); // O filter está sendo usado para filtrar os valores do estado colors, se o valor do estado colors for diferente do valor do target(elemento clicado) então o valor é retornado para a nova array e o estado colors é atualizado com a nova array.
    }
  }

  // Retorna um formuário com os checkbox.
  return (
    <form>
      {/* O map está sendo usado para percorrer a array coresArray e retornar um label com um input do tipo checkbox para cada valor(cor) da array, o index mostra a posição do valor na array. */}
      {coresArray.map((cor, index) => {
        return (
          <label key={index} style={{ textTransform: "capitalize" }}>
            <input
              type="checkbox"
              // O value está sendo usado para passar o valor do estado colors para o target, o index está sendo usado para passar um valor único para cada checkbox.
              value={cor + index}
              // O atributo checked é usado para marcar o checkbox como checado ou não, passa o valor do estado colors e usa o includes para verificar se o valor passado está dentro do estado colors se estiver retorna true e marca o checkbox se não retorna false e desmarca o checkbox. O index está sendo usado para passar um valor único para cada checkbox.
              checked={colors.includes(cor + index)}
              // Quando o evento onChange é disparado executa a função handleChange responsável por atualizar o estado colors.
              onChange={handleChange}
            />
            {cor}
          </label>
        );
      })}
    </form>
  );
};

export default App; // Está exportando o componente App.
