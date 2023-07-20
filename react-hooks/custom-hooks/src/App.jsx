// Importa a biblioteca React.
import React from "react";

// Importa o hook useLocalStorage.
import useLocalStorage from "./Hooks/useLocalStorage";

// Criado um componente chamado App.
const App = () => {
  const [product, setProduct] = useLocalStorage("product", ""); // Cria um estado com o nome product e uma função com o nome setProduct para atualizar o estado. O useLocalStorage está sendo usado para armazenar o valor do localStorage com a chave product e o valor inicial vazio.

  // Criado uma função chamada handleClick responsável por atualizar o estado product, está desestruturando e recebendo um evento como parâmetro.
  function handleClick({ target }) {
    setProduct(target.innerText); // Está atualizando o estado product com o valor do texto do botão clicado.
  }

  // Retorna um elemento div com um elemento h1 e dois elementos button. O h1 está mostrando o valor do estado product. Os botões estão chamando a função handleClick quando forem clicados.
  return (
    <div>
      <h1>Produto preferido: {product}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App; // Está exportando o componente App.
