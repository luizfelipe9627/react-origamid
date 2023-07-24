// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Input que recebe os atributos label, id, onChange, value, type, onBlur, placeholder e error do componente App.
const Input = ({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  // Retorna um label e um input.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        // O name serve para ao enviar o formulário, o valor do input ser enviado com o nome do input e também para o input ser associado ao label.
        name={id}
      />
    </React.Fragment>
  );
};

export default Input; // Está exportando o componente Input.
