// Importando o React.
import React from "react";

// Criado um componente chamado ModalContent que como seu parâmetro recebe a desestruturação({ modal, setModal }) do componente Modal.
const ModalContent = ({ modal, setModal }) => {
  // Se o valor do estado for true, o modal será exibido.
  if (modal) {
    return (
      <div>
        {/* Quando clicado no botão, a função setModal será executada, alterando o valor do estado para false. */}
        Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  }
  return null; // Se o valor do estado for false, o modal não será exibido.
};

export default ModalContent;
