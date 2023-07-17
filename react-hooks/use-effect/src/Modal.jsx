// Está importando o React.
import React from "react";

// Está criando um componente chamado Modal.
const Modal = () => {
  //* > UseEffect com Return.
  
  // Com o useEffect o evento será adicionado apenas uma vez, pois o array está vazio. Agora caso o evento fosse adicionado fora do useEffect, toda vez que o componente fosse renderizado, atualizado ou executado, seria adicionado o mesmo evento.
  React.useEffect(() => {
    // Está criando uma função chamada handleScroll responsável por exibir no console a mensagem "Scroll".
    function handleScroll() {
      console.log("Scroll");
    }

    window.addEventListener("scroll", handleScroll); // Está adicionando um evento de scroll na janela do navegador e executando a função handleScroll quando o evento for disparado.

    // O return é executado quando o componente for desmontado, ou seja, quando o componente for removido da tela para que não fique executando o evento de scroll.
    return () => {
      window.removeEventListener("scroll", handleScroll); // Está removendo o evento de scroll na janela do navegador e executando a função handleScroll quando o evento for disparado.
    };
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <p>Meu modal</p>
    </div>
  );
};

export default Modal; // Está exportando o componente Modal.
