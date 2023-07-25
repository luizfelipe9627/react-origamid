// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Input from "./Form/Input";

// Criado um componente chamado App.
const App = () => {
  const [cep, setCep] = React.useState(""); // Criado um estado chamado cep e uma função setCep para alterar o estado. O estado inicial do cep é uma string vazia.
  const [error, setError] = React.useState(null); // Criado um estado chamado error e uma função setError para alterar o estado. O estado inicial do error é null.

  // Função chamada validateCep que recebe o valor do estado cep, função responsável por verificar se o valor passado é um CEP.
  function validateCep(value) {
    // Se o valor passado for igual a 0 executa o bloco de código do if.
    if (value.length === 0) {
      setError("Preencha um valor"); // O estado error recebe a string Preencha um valor.
      return false; // Retorna false.
    }
    // Senão se a regex for diferente(false) do valor do parâmetro value executa o bloco de código do else if.
    else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido"); // O estado error recebe a string Preencha um valor.
      return false; // Retorna false.
    }
    // Senão executa o bloco de código do else.
    else {
      setError(null); // O estado error recebe null.
      return true; // Retorna true.
    }
  }

  // Função chamada handleBlur que recebe o evento e desestrutura o target do evento, função responsável por verificar se o valor passado é um CEP quando o elemento perde o foco.
  function handleBlur({ target }) {
    validateCep(target.value); // A função validateCep é chamada e passa o valor(o que foi digitado) do target(elemento clicado) para o parâmetro value da função validateCep.
  }

  // Função chamada handleChange que recebe o evento e desestrutura o target do evento, função responsável por verificar se o valor passado é um CEP quando o valor do elemento é alterado.
  function handleChange({ target }) {
    // Se o estado error for verdadeiro(true) executa o bloco de código do if.
    if (error) {
      validateCep(target.value); // A função validateCep é chamada e passa o valor(o que foi digitado) do target(elemento clicado) para o parâmetro value da função validateCep.
    }
    setCep(target.value); // O estado cep recebe o valor(o que foi digitado) do target(elemento clicado).
  }

  // Função chamada handleSubmit que recebe o evento, função responsável por verificar se o valor passado é um CEP quando o formulário é enviado.
  function handleSubmit(event) {
    event.preventDefault(); // O método preventDefault() evita que o comportamento padrão aconteça, no caso, evita que a página seja recarregada.

    // Se a função validateCep retornar true executa o bloco de código do if.
    if (validateCep(cep)) {
      console.log("Enviou"); // Mostra no console a string Enviou.
    }
    // Senão executa o bloco de código do else.
    else {
      console.log("Não Enviou"); // Mostra no console a string Não Enviou.
    }
  }

  // Retorna um formulário com um Input do tipo text com o label CEP, id cep, value igual ao estado cep, onChange igual ao handleChange, placeholder 00000-000 e onBlur igual ao handleBlur.
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        // O value está sendo usado para passar o valor do estado cep para o componente Input.
        value={cep}
        // O setValue está sendo usado para passar a função atualizadora setCep para o componente Input.
        onChange={handleChange}
        placeholder="00000-000"
        // O onBlur é disparado quando o elemento perde o foco,ou seja, quando o usuário clica em outro elemento executa a função handleBlur.
        onBlur={handleBlur}
      />

      {/* Se o estado error for verdadeiro(true) mostra um parágrafo com o valor do estado error. */}
      {error && <p>{error}</p>}

      <button>Enviar</button>
    </form>
  );
};

export default App; // Está exportando o componente App.
