// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import Input from "./Input";
import Button from "./Button";

// Criado um componente chamado Form.
const Form = () => {
  const array = ["Item 1", "Item 2", "Item 3"]; // Criado uma variável array que recebe um array com três itens.

  // Retorna um elemento div com 3 componentes Input e um componente Button.
  return (
    <div>
      {/* Chama o componente Input e passa o parâmetro label e id com o valor atribuido para cada um. */}
      <Input id="email" label="Email" required />
      <Input id="senha" type="password" label="Senha" />
      {/* Chama o componente Button e passa o parâmetro items com o valor atribuido. */}
      <Button items={array} />
    </div>
  );
};

export default Form; // Está exportando o componente Form.
