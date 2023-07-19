// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import Input from "./Input";
import Button from "./Button";

// Criado um componente chamado Form.
const Form = () => {
  // Retorna um formulário com dois inputs e um botão.
  return (
    <form>
      <p>
        <label htmlFor="nome"></label>
        <Input />
      </p>
      <p>
        <label htmlFor="email"></label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Form; // Está exportando o componente Form.
