// Está importando o React.
import React from "react";

// Está criando um componente chamado Notificacao.
const Notificacao = () => {
  const [carrinho, setCarrinho] = React.useState(0); // Criado um state(estado) chamado carrinho e uma função chamada setCarrinho para atualizar o valor do state(estado) carrinho que começa com o valor 0.
  const [notificacao, setNotificacao] = React.useState(null); // Criado um state(estado) chamado notificacao e uma função chamada setNotificacao para atualizar o valor do state(estado) notificacao que começa com o valor null.

  const timeoutRef = React.useRef(); // Criado uma referência chamada timeoutRef.

  // Criado uma função chamada handleClick que ao ser executada atualiza o valor do state(estado) carrinho e notificacao.
  function handleClick() {
    setCarrinho(carrinho + 1); // Atualiza o valor do state(estado) carrinho.
    setNotificacao("Item adicionado ao carrinho!"); // Atualiza o valor do state(estado) notificacao para "Item adicionado ao carrinho!".

    clearTimeout(timeoutRef.current); // Limpa o timeoutRef.
    // O useRef está sendo usado para armazenar o ID do setTimeout, assim é possível limpar o timeoutRef antes de executar o setTimeout novamente.
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null); // Atualiza o valor do state(estado) notificacao para o seu valor inicial.
    }, 2000);
  }

  // Retorna um elemento div com um parágrafo e um botão.
  return (
    <div>
      <p>{notificacao}</p>
      {/* Criado um botão que ao ser clicado executa a função handleClick. */}
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default Notificacao; // Está exportando o componente Notificacao.
