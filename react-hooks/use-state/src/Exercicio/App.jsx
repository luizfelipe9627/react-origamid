// Importa a biblioteca React.
// Importa a biblioteca React.
import React from "react";

// Importa o componente Produtos.
import Produtos from "./Produtos";

// Os links abaixo puxam dados de um produto em formato JSON:
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto. Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela. Mostre apenas um produto por vez. Mostre a mensagem carregando... enquanto o fetch é realizado.

// Cria um componente chamado App.
const App = () => {
  const [data, setData] = React.useState(null); // Cria um estado chamado data e inicializa com null.
  const [loading, setLoading] = React.useState(null); // Cria um estado chamado loading e inicializa com null.

  async function handleClick(event) {
    setLoading(true); // Altera o estado loading para true.

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    ); // Criado uma constante chamada response que recebe o resultado da função fetch após a requisição ser feita. O await serve para esperar a requisição ser feita antes de continuar o código.

    const json = await response.json(); // Criado uma constante chamada json que recebe o resultado da função em formato JSON após a requisição ser feita. O await serve para esperar a requisição ser feita antes de continuar o código.

    setData(json); // Altera o estado data para o valor de json.

    setLoading(false); // Altera o estado loading para false.
  }

  // Retorna um elemento React.Fragment com 3 botões e um componente Produtos.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      {/* Cria 3 botões que ao serem clicados chamam a função handleClick. */}
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>

      {/* Se loading for true, mostra a mensagem "loading..."*/}
      {loading && <p>loading...</p>}

      {/* Se carrergando for false e data for true, mostra o componente Produtos. */}
      {!loading && data && <Produtos data={data} />}
    </React.Fragment>
  );
};

export default App; // Exporta o componente App.
