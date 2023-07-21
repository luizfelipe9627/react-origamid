// Importa a biblioteca React.
import React from "react";

// Faça um fetch (POST) para a API abaixo. Para a criação ser aceita é necessário enviar dodos de: nome, email, senha, cep, rua, numero, bairro, cidade e estado. Essa é a função utilizado para realizar o POST.
// Mostre uma mensagem na tela, caso a resposta da API seja positiva

// Criado uma array chamada formFields que contém objetos com as informações de cada campo do formulário.
const formFields = [
  { id: "name", label: "Nome", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "password", label: "Senha", type: "password" },
  { id: "cep", label: "Cep", type: "text" },
  { id: "street", label: "Rua", type: "text" },
  { id: "number", label: "Número", type: "text" },
  { id: "neighborhood", label: "Bairro", type: "text" },
  { id: "city", label: "Cidade", type: "text" },
  { id: "state", label: "Estado", type: "text" },
];

// Criado um componente chamado App.
const App = () => {
  // Cria um estado com o nome form e uma função com o nome setForm para atualizar o estado. Começa por padrão com um objeto que tem como propriedade todos os dados do formulário.
  const [form, setForm] = React.useState(
    // Como padrão o acumulador(acc) começa com um objeto vazio e o item(field) começa com o primeiro elemento do array. O reduce retorna um objeto com as propriedades do array e com o valor vazio.
    formFields.reduce((acc, field) => {
      // Retorna um objeto com as propriedades do array e com o valor vazio.
      return {
        ...acc,
        [field.id]: "",
      };
    }, {}),
  );

  // Criado uma função chamada handleChange responsável por atualizar o estado form, está recebendo um evento target como parâmetro.
  function handleChange({ target }) {
    const { id, value } = target; // Desestruturação do evento target, pegando o id e o valor do input.
    setForm({ ...form, [id]: value }); // Pega os valores antigos do estado form(os vazios) e adiciona um novo valor no estado form, o id é o nome da propriedade do objeto form e o value é o valor da propriedade do objeto form(que é o que é digitado no input).
  }

  const [response, setResponse] = React.useState(null); // Cria um estado com o nome response e uma função com o nome setresponse para atualizar o estado. Começa por padrão com o valor null.

  // Cria uma função chamada handleSubmit responsável por fazer o envio dos dados do formulário para a API.
  function handleSubmit(event) {
    event.preventDefault(); // Usado o preventDefault() para evitar que o formulário seja enviado e a página seja recarregada.

    // Usado o fetch para fazer uma requisição POST para a API, no qual o primeiro argumento é a URL e o segundo argumento é um objeto com as configurações da requisição.
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST", // Método POST responsável por criar um novo usuário.
      // O cabeçalho da requisição é o que define o tipo de conteúdo que está sendo enviado.
      headers: {
        "Content-Type": "application/json", // O cabeçalho Content-Type informa ao servidor qual o tipo de conteúdo está sendo enviado nesse caso JSON.
      },
      body: JSON.stringify(form), // O método JSON.stringify() converte um objeto ou valor JavaScript em uma string JSON, nessse caso está convertendo o objeto form em uma string JSON.
    }).then((response) => {
      setResponse(response); // Atualiza o estado response com a resposta da requisição.
      console.log(response); // Mostra no console a resposta da requisição.
    });
  }

  // Retorna o formulário com os inputs e um botão.
  return (
    // Quando o formulário for enviado, a função handleSubmit será chamada.
    <form onSubmit={handleSubmit}>
      {/* O map está percorrendo o array formFields e retornando um elemento para cada item do array e criando um label e um input para cada item do array. */}
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}

      {/* Se o estado response for verdadeiro e a resposta da requisição for positiva, mostra a mensagem de sucesso. */}
      {response && response.status == 403 && <p>Usuário não autorizado!</p>}
      {response && response.status == 200 && <p>Usuário criado com sucesso!</p>}

      <button>Enviar</button>
    </form>
  );
};

export default App; // Está exportando o componente App.
