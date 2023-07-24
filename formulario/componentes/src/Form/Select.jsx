// Importa a biblioteca React.
import React from "react";

// Criado um componente chamado Select que recebe os atributos options, value e setValue e props que armazena todas as propriedades definidas no componente Select do arquivo App.jsx que não foram desestruturadas(que não foram passadas como parâmetro).
const Select = ({ options, value, setValue, ...props }) => {
  // Retorna um select com um option com o texto Selecione e um option para cada elemento do array options.
  return (
    // Quando houver uma mudança no value(o valor selecionado no select) o onChange vai executar o callback passando o evento target como parâmetro e atualizando o estado value com o valor selecionado no select.
    <select value={value} onChange={({ target }) => setValue(target.value)}>
      {/* O spread operator está sendo usado para passar todos os atributos que tiveram sua chave e valor iguais, sendo assim, o disabled. */}
      <option value="" {...props}>
        Selecione
      </option>

      {/* O map está percorrendo o array options e retornando um option para cada elemento do array. */}
      {options.map((option) => {
        return (
          // O value serve para ao enviar o formulário o valor do input seja enviado e também para o input ser associado ao label.
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select; // Está exportando o componente Select.
