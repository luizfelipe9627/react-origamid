// Está importando o React.
import React from "react";
import ButtonModal from "./ButtonModal";
import ModalContent from "./ModalContent";

// Criado um componente chamado Modal.
const Modal = () => {
  const [modal, setModal] = React.useState(false); // Criado uma constante chamada modal que é responsável por armazenar o valor do estado e setModal que é uma função responsável por alterar o valor do estado. Por padrão, o valor do estado é false, sendo assim, o modal não será exibido.

  return <div>
    {/* Chamado os componentes e passa o valor do estado e a função setModal como parâmetro. */}
    <ButtonModal modal={modal} setModal={setModal} />
    <ModalContent modal={modal} setModal={setModal} />
  </div>;
};

export default Modal; // Está exportando o componente Modal.
