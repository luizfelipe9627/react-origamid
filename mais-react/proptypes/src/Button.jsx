// Importa a biblioteca React.
import React from "react";

// Importa a biblioteca PropTypes.
import PropTypes from "prop-types";

// Criado um componente chamado Button que recebe um parâmetro chamado props.
const Button = (props) => {
  // Retorna um button com o conteúdo que está dentro do componente Button no App.jsx e com o estilo definido no objeto style.
  return (
    <button
      style={{
        // Está passando 10px como valor padrão para o parâmetro margin caso não seja passado nenhum valor para o componente Button.
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {/* O props.children é o conteúdo que está dentro do componente Button no
      App.jsx. */}
      {props.children}
    </button>
  );
};

// Define o valor padrão do parâmetro width caso não seja passado nenhum valor para o componente Button.
Button.defaultProps = {
  margin: "10px",
};

// Define o tipo de dado que o componente Button espera receber.
Button.propTypes = {
  // Está fazendo com que o parâmetro width seja um número e obrigatório.
  width: PropTypes.number.isRequired,
  // Está fazendo com que o parâmetro margin seja uma string.
  margin: PropTypes.string,
};

export default Button; // Está exportando o componente Button.
