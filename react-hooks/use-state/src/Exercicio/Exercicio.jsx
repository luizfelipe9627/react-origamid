// Importa o React.
import React from "react";

// Importa o componente Produtos.
import Produtos from "./Produtos";

// Os links abaixo puxam dados de um produto em formato JSON:
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto. Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela. Mostre apenas um produto por vez. Mostre a mensagem carregando... enquanto o fetch é realizado.

const Exercicio = () => {
  const [dados, setDados] = React.useState(null); // Cria um estado chamado dados e inicializa com null.
  const [carregando, setCarregando] = React.useState(null); // Cria um estado chamado carregando e inicializa com null.

  async function handleClick(event) {
    setCarregando(true); // Altera o estado carregando para true.

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    ); // Criado uma constante chamada response que recebe o resultado da função fetch após a requisição ser feita. O await serve para esperar a requisição ser feita antes de continuar o código.

    const json = await response.json(); // Criado uma constante chamada json que recebe o resultado da função em formato JSON após a requisição ser feita. O await serve para esperar a requisição ser feita antes de continuar o código.

    setDados(json); // Altera o estado dados para o valor de json.

    setCarregando(false); // Altera o estado carregando para false.
  }

  return (
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

      {/* Se carregando for true, mostra a mensagem "Carregando..."*/}
      {carregando && <p>Carregando...</p>}

      {/* Se carrergando for false e dados for true, mostra o componente Produtos. */}
      {!carregando && dados && <Produtos dados={dados} />}
    </React.Fragment>
  );
};

export default Exercicio; // Exporta o componente Exercise.
