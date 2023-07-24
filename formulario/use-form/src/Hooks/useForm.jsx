import React from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "CEP inválido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState({}); // Criado um estado chamado value e uma função setValue para alterar o estado. O estado inicial do values é um objeto vazio.
  const [error, setError] = React.useState(null); // Criado um estado chamado error e uma função setError para alterar o estado. O estado inicial do error é null.

  function validate(value) {
    // Se o valor passado for igual a 0 executa o bloco de código do if.
    if (value.length === 0) {
      setError("Preencha um valor"); // O estado error recebe a string Preencha um valor.
      return false; // Retorna false.
    }
    // Senão se o type for diferente(false) do valor do parâmetro value executa o bloco de código do else if.
    else if (!types[type].regex.test(value)) {
      setError(types[type].message); // O estado error recebe a mensagem presente no objeto types.
      return false; // Retorna false.
    }
    // Senão executa o bloco de código do else.
    else {
      setError(null); // O estado error recebe null.
      return true; // Retorna true.
    }
  }

  function onChange({ target }) {
    // Se o estado error for verdadeiro(true) executa o bloco de código do if.
    if (error) {
      validate(target.value); // A função valida é chamada e passa o valor(o que foi digitado) do target(elemento clicado) para o parâmetro value da função valida.
    }
    setValue(target.value); // O estado value recebe o valor(o que foi digitado) do target(elemento clicado).
  }

  // Retorna um objeto com o estado value, a função atualizadora setValue, o estado error, a função onChange e a função onBlur que chama a função validate passando o valor do estado value.
  return { value, setValue, error, onChange, onBlur: () => validate(value) };
};

export default useForm;
