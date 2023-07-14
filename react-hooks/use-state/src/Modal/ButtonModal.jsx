// Está importando o React.
import React from "react";

// Criado um componente chamado ButtonModal que como seu parâmetro recebe a desestruturação({ modal, setModal }) do componente Modal.
const ButtonModal = ({ modal, setModal }) => {
  // Retorna um botão com o texto Abrir. Ao clicar no botão, a função setModal será executada, alterando o valor do estado para true.
  return (
    <div>
      <div>
        {/* Se setModal for true, o texto será Modal Aberto, caso contrário, o texto será Modal Fechado. */}
        {modal ? "Modal Aberto" : "Modal Fechado"}
      </div>
      {/* Ao clicar no botão, a função setModal será executada, alterando o valor do estado para true. */}
      <button onClick={() => setModal(true)}>Abrir</button>
    </div>
  );
};

export default ButtonModal; // Está exportando o componente ButtonModal.
