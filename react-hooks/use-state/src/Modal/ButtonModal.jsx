// Está importando o React.
import React from "react";

// Criado um componente chamado ButtonModal que como seu parâmetro recebe a desestruturação({ modal, setModal }) do componente Modal.
const ButtonModal = ({ modal, setModal }) => {
  // Criado uma função chamada handleClick responsável por alterar o valor do estado para o valor contrário do estado atual.
  function handleClick() {
    setModal((modal) => !modal); // Atualiza o valor do estado modal para o valor contrário do estado atual.
  }

  // Retorna um botão com o texto Abrir. Ao clicar no botão, a função setModal será executada, alterando o valor do estado para true.
  return (
    <div>
      <div>
        {/* Se setModal for true, o texto será Modal Aberto, caso contrário, o texto será Modal Fechado. */}
        {modal ? "Modal Aberto" : "Modal Fechado"}
      </div>

      {/* Ao clicar no botão, a função setModal será executada, alterando o valor do estado para true. */}
      <button onClick={() => setModal(true)}>Abrir</button>

      {/* Ao clicar no botão, a função handleClick2 será executada, responsável por alterar o valor do estado para o valor contrário do estado atual, no caso se for true, será false, e se for false, será true. */}
      <button onClick={handleClick}>Abrir/Fechar</button>
    </div>
  );
};

export default ButtonModal; // Está exportando o componente ButtonModal.
