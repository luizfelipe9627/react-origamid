// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Checkbox que recebe os atributos options, value, setValue e props que armazena todas as propriedades definidas no componente Checkbox do arquivo App.jsx que não foram desestruturadas(que não foram passadas como parâmetro).
const Checkbox = ({ options, value, setValue, ...props }) => {
  // Função chamada handleChange que recebe o evento e desestrutura o target do evento para usar o valor do target.
  function handleChange({ target }) {
    // Se o target(elemento clicado) for checado então executa o bloco de código do if.
    if (target.checked) {
      setValue([...value, target.value]); // O estado value recebe uma array com os valores anteriores e o valor do target(elemento clicado) atual.
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value)); // O filter está sendo usado para filtrar os valores do estado value, se o valor do estado value for diferente do valor do target(elemento clicado) então retorna true e o valor é mantido na array, se o valor do estado value for igual ao valor do target(elemento clicado) então retorna false e o valor é removido da array.
    }
  }
  
  // Retorna um fragmento com o map que está percorrendo o array options e para cada elemento do array está retornando um label e um input.
  return (
    <React.Fragment>
      {/* Está percorrendo o array options e para cada elemento do array está retornando um label e um input. */}
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="checkbox"
              // O value serve para ao enviar o formulário o valor do input seja enviado e também para o input ser associado ao label.
              value={option}
              // O checked serve para quando o valor do estado value for igual ao valor do option, o input ser marcado como checado e quando o valor do estado value for diferente do valor do option, o input ser desmarcado.
              checked={value.includes(option)}
              // Quando houver uma mudança no value o onChange vai executar a função handleChange passando o evento como parâmetro.
              onChange={handleChange}
              // O props são as propriedades definidas no componente Checkbox do arquivo App.jsx que não foram desestruturadas, ou seja que não foram passadas como parâmetro do componente Checkbox.
              {...props}
            />
            {option}
          </label>
        );
      })}
    </React.Fragment>
  );
};

export default Checkbox; // Está exportando o componente Checkbox.
