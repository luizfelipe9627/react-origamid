// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

// Criado um componente chamado App.
const App = () => {
  const cep = useForm("cep"); // Criado uma constante cep que recebe o retorno da função useForm passando o parâmetro cep.

  console.log(cep);

  // Função chamada handleSubmit que recebe o evento, função responsável por verificar se o valor passado é um CEP quando o formulário é enviado.
  function handleSubmit(event) {
    event.preventDefault(); // O método preventDefault() evita que o comportamento padrão aconteça, no caso, evita que a página seja recarregada.

    // Se a função validateCep retornar true executa o bloco de código do if.
    if (true) {
      console.log("Enviou"); // Mostra no console a string Enviou.
    }
    // Senão executa o bloco de código do else.
    else {
      console.log("Não Enviou"); // Mostra no console a string Não Enviou.
    }
  }

  // Retorna uma div com o texto App React.
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        // O operador spread(...) está espalhando o objeto cep, ou seja, está passando todas as propriedades do objeto cep retornado do useForm para o componente Input como o estado value, a função atualizadora setValue, o estado error, a função onChange e a função onBlur.
        {...cep}
      />

      <button>Enviar</button>
    </form>
  );
};

export default App; // Está exportando o componente App.
