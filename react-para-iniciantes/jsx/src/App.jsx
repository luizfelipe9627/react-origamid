// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  // Cria uma constante chamada city com o valor São Paulo.
  const city = "São Paulo";

  // Cria uma constante chamada numberRandom com um valor aleatório.
  const numberRandom = Math.random();

  // Cria uma constante chamada activated com o valor true.
  const activated = false;

  // Cria uma constante chamada title com um elemento HTML.
  const title = <h1>Aprendendo React</h1>;

  // Cria uma função chamada showName responsável por retornar o valor do parâmetro firstName e lastName.
  function showName(lastName) {
    return "Luiz " + lastName; // Retorna uma string com o valor Luiz e o valor do parâmetro lastName concatenados.
  }

  // Cria uma constante chamada car com um objeto representando um carro.
  const car = {
    brand: "Ford",
    wheels: 4,
  };

  // Cria uma constante chamada styleP com um objeto representando um estilo CSS.
  const styleP = {
    color: "blue",
    fontSize: "1.5rem",
  };

  // O className é utilizado para adicionar uma classe no elemento.
  // O htmlFor é utilizado para adicionar um for no elemento.
  // O style é utilizado para adicionar um estilo no elemento.
  // Usamos os {} para adicionar um código JS dentro do HTML.
  
  // Retorna um elemento React.Fragment com um título, um link, um label, um input, um parágrafo e o ano atual.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      {/* Está chamando a constante title. */}
      {title}
      {/* Criado um link. */}
      <a
        className="active"
        href="https://www.google.com"
        title="Site do Google"
      >
        Google
      </a>
      {/* Criado um label e um input. */}
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      {/* Criado um parágrafo que tem uma classe que é ativada se a constante activated for true. */}
      <p className={activated ? "active" : "inactive"}>
        {/* Multiplica o valor da constante numberRandom por 100. */}
        Número: {numberRandom * 100}{" "}
      </p>
      {/* Está chamando/executando a função showName e passando o valor Santos como parâmetro. */}
      <p>{showName("Santos")}</p> <p style={styleP}>Sua cidade é: {city}</p>
      {/* Retorna o ano atual. */}
      <p>{new Date().getFullYear()}</p>
      {/* Retorna o valor das propriedades do objeto car. */}
      {/* Não pode ser passado somente o objeto se não da erro, tem que ser passado o objeto.propriedade. */}
      <p>{car.brand}</p>
      <p>{car.wheels}</p>
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
