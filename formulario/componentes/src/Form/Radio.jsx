// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Radio que recebe os atributos options, value, setValue e props que armazena todas as propriedades definidas no componente Radio do arquivo App.jsx que não foram desestruturadas(que não foram passadas como parâmetro).
const Radio = ({ options, value, setValue, ...props }) => {
  // Retorna um fragmento com o map que está percorrendo o array options e para cada elemento do array está retornando um label e um input.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      {/* O map está percorrendo o array options e retornando um label para cada elemento do array. */}
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="radio"
              // O checked verifica se o value é igual ao option e retorna true ou false, sendo true o radio fica marcado e false desmarcado.
              checked={value === option}
              // O value serve para ao enviar o formulário o valor do input seja enviado e também para o input ser associado ao label.
              value={option}
              // Quando houver uma mudança no value o onChange vai executar o callback passando o evento target como parâmetro e atualizando o estado value com o valor selecionado no radio.
              onChange={({ target }) => setValue(target.value)}
              // O props são as propriedades definidas no componente Radio do arquivo App.jsx que não foram desestruturadas, ou seja que não foram passadas como parâmetro do componente Radio.
              {...props}
            />
            {option}
          </label>
        );
      })}
    </React.Fragment>
  );
};

export default Radio; // Está exportando o componente Radio.
