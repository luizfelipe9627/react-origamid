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
  // Retorna um formulário com um label, um input e um parágrafo.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      {/* Está sendo passado pelo parâmetro o atributo label e o atributo htmlFor do label está recebendo o valor do atributo id. */}
      <label htmlFor={id}>{label}</label>
      <input
        // Está pegando do parâmetro os atributos id, name, onChange, placeholder, value, onBlur e type e atribuindo seus valores definidos no App para os atributos do input.
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value.value}
        onBlur={onBlur}
        onChange={onChange}
      />

      {/* Se o estado error for verdadeiro(true) mostra o parágrafo com a mensagem de erro. */}
      {error && <p>{error}</p>}
    </React.Fragment>
  );
};

export default Input; // Está exportando o componente Input.
