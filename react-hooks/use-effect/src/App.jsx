// Importa a biblioteca React.
import React from "react";

// Importa o componente Modal.
import Modal from "./Modal";

// Criado um componente chamado App.
const App = () => {
  //* > UseEffect sem dependência([]).

  const [count, setCount] = React.useState(0); // O useState é um Hook que permite adicionar o state do React a um componente de função. Ele retorna um array com 2 posições, a primeira é o valor do state(estado) e a segunda é uma função para atualizar o valor do state(estado).

  console.log("Executou o componente App"); // Sem o useEffect, toda vez que o componente for renderizado, atualizado ou executado, será exibido no console a mensagem "Executou o componente App".

  // O useEffect será executado toda vez que o componente for renderizado, atualizado ou executado. Para evitar que isso aconteça, é necessário passar um array vazio como segundo parâmetro do useEffect.
  React.useEffect(() => {
    console.log("Executou o useEffect");
  }, []);

  // * > UseEffect com dependência([]).

  // O useEffect será executado toda vez que o componente for renderizado, atualizado ou executado, mas somente quando o valor do state(estado) count for alterado.
  React.useEffect(() => {
    document.title = `Total ${count}`; // Altera o título da página para "Total" + o valor do state(estado) count.
  }, [count]);

  //* > UseEffect com dependência([]) e fetch.

  const [data, setData] = React.useState(null); // O useState é um Hook que permite adicionar o state do React a um componente de função. Ele retorna um array com 2 posições, a primeira é o valor do state(estado) e a segunda é uma função para atualizar o valor do state(estado).

  // O useEffct executa o callback apenas uma vez quando o componente for renderizado, atualizado ou executado pois o array está vazio.
  React.useEffect(() => {
    // O fetch é uma API que serve para fazer requisições HTTP, ele é baseado em Promises.
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      // O then retorna a resposta da requisição e transforma em JSON.
      .then((response) => response.json())
      // O then retorna o JSON da requisição e atualiza o valor do state(estado) data.
      .then((json) => setData(json));
  }, []);

  //* > UseEffect utilizando Modal.

  const [modal, setModal] = React.useState(false); // O useState é um Hook que permite adicionar o state do React a um componente de função. Ele retorna um array com 2 posições, a primeira é o valor do state(estado) e a segunda é uma função para atualizar o valor do state(estado).

  return (
    // O React.Fragment é um componente que não renderiza nada, ele é usado para agrupar elementos filhos sem adicionar nós extras ao DOM.
    <React.Fragment>
      <h1>UseEffect utilizando Contador</h1>
      {/* Criado um botão que ao ser clicado executa a função anônima do onClick que atualiza o valor do state(estado) count. */}
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <h1>UseEffect utilizando Fetch</h1>
      <div>
        {/* Se data for true, no caso se existir data, então exibe a div. */}
        {data && (
          <div>
            <h3>{data.nome}</h3>
            {/* Pega o preco e multiplica pelo count */}
            <p>R$ {data.preco * count}</p>
          </div>
        )}
      </div>

      <h1>UseEffect utilizando Modal</h1>
      <div>
        {/* Se modal for true, no caso se existir modal, então exibe o componente Modal. */}
        {modal && <Modal />}
        <button onClick={() => setModal(!modal)}>Abrir</button>
      </div>
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
