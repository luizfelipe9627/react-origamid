// Importa o React.
import React from "react";

// Criado um componente chamado Input que recebe uma desestruturação responsável por retornar o label e o id que foi passada no componente e o ...props que é responsável por retornar todas as propriedades que foram passadas após o id, que no caso é o required e o type.
const Input = ({ label, id, ...props }) => {
  // Retorna um input com o label que foi passado no parâmetro label e o id que foi passado no parâmetro id.
  return (
    //  Na div foi passado um estilo para o margin.
    <div style={{ margin: "1rem 0" }}>
      <label htmlFor={id}>{label}</label>
      {/* O ...props retorna todas as propriedades que foram passadas após o id, reescrevendo o elemento já existente, no caso o type. */}
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default Input; // Está exportando o componente Input.
