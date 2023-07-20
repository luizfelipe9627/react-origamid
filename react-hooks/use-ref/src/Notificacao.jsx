// Está importando o React.
import React from "react";

// Está criando um componente chamado Notificacao.
const Notificacao = () => {
  const [cart, setCart] = React.useState(0); // Criado um state(estado) chamado cart e uma função chamada setCart para atualizar o valor do state(estado) cart que começa com o valor 0.
  const [notification, setNotification] = React.useState(null); // Criado um state(estado) chamado notification e uma função chamada setNotification para atualizar o valor do state(estado) notification que começa com o valor null.

  const timeoutRef = React.useRef(); // Criado uma referência chamada timeoutRef.

  // Criado uma função chamada handleClick que ao ser executada atualiza o valor do state(estado) cart e notification.
  function handleClick() {
    setCart(cart + 1); // Atualiza o valor do state(estado) cart.
    setNotification("Item adicionado ao cart!"); // Atualiza o valor do state(estado) notification para "Item adicionado ao cart!".

    clearTimeout(timeoutRef.current); // Limpa o timeoutRef.
    // O useRef está sendo usado para armazenar o ID do setTimeout, assim é possível limpar o timeoutRef antes de executar o setTimeout novamente.
    timeoutRef.current = setTimeout(() => {
      setNotification(null); // Atualiza o valor do state(estado) notification para o seu valor inicial.
    }, 2000);
  }

  // Retorna um elemento div com um parágrafo e um botão.
  return (
    <div>
      <p>{notification}</p>
      {/* Criado um botão que ao ser clicado executa a função handleClick. */}
      <button onClick={handleClick}>Adicionar ao cart {cart}</button>
    </div>
  );
};

export default Notificacao; // Está exportando o componente Notificacao.
