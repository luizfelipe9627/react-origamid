// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Input que recebe os atributos label, id e props que armazena todas as propriedades definidas no componente Input do arquivo App.jsx que não foram desestruturadas(que não foram passadas como parâmetro).
const Input = ({ label, id, ...props }) => {
  // Retorna um label e um input.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        // O spread operator está sendo usado para passar todos os atributos que tiveram sua chave e valor iguais, sendo assim, o required, value e onChange estão sendo passados para o input.
        {...props}
        // O name serve para ao enviar o formulário, o valor do input ser enviado com o nome do input e também para o input ser associado ao label.
        name={id}
      />
    </React.Fragment>
  );
};

export default Input; // Está exportando o componente Input.
