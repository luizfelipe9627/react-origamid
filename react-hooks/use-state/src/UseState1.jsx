import React from "react"; // Importa o React.

// Hooks são funções que permitem utilizar o state e outros recursos do React sem escrever uma classe.
// Criado um componente chamado UseState1.
const UseState1 = () => {
  //* > Estado.

  let activeTest = false; // Criado uma variável chamada activeTest e atribuido o valor false.

  // Criado uma função chamada handleClick responsável por inverter o valor da variável activeTest.
  function handleClick1() {
    activeTest = !activeTest; // Inverte o valor da variável activeTest então se for true, passa a ser false e vice-versa.
    console.log(activeTest); // Imprime no console o valor da constante activeTest.
  }

  //* > useState fora da Array.

  const activeHook = React.useState(false); // Criado uma constante chamada activeHook que recebe o useState e seu estado inicial sendo false.

  const activeValue = activeHook[0]; // Criado uma constante chamada activeValue que recebe o primeiro elemento da array activeHook que é responsável por armazenar o valor do estado.
  const updateActive = activeHook[1]; // Criado uma constante chamada updateActive que recebe o segundo elemento da array activeHook que é uma função responsável por alterar o valor do estado.

  // Criado uma função chamada handleClick2 responsável por alterar o valor do estado através da função updateActive.
  function handleClick2() {
    updateActive(!activeValue); // Altera o valor do estado, se for true, passa a ser false e vice-versa.
  }

  //* > UseState em Array.

  const [active, setActive] = React.useState(false); // Criado uma constante chamada active que é responsável por armazenar o valor do estado e setActive que é uma função responsável por alterar o valor do estado.

  // Criado uma função chamada handleClick3 responsável por alterar o valor do estado através da função setActive.
  function handleClick3() {
    setActive(!active); // Altera o valor do estado, se for true, passa a ser false e vice-versa.
  }

  //* > Dados.
  // Podemos usar o useState para armazenar qualquer tipo de dado, como por exemplo, um objeto.
  const [person, setPerson] = React.useState({
    firstName: "Luiz",
    lastName: "Silva",
    age: 20,
  }); // Criado uma constante chamada person que é responsável por armazenar o valor do estado e setPerson que é uma função responsável por alterar o valor do estado.

  // Criado uma função chamada handleClick4 responsável por alterar o valor do estado através da função setPerson.
  function handleClick4() {
    setPerson({ ...person, study: "Estuda" }); // Altera o valor do estado, adicionando o atributo study com o valor Estuda.
  }

  // Retorna um botão com o texto Ativo ou Inativo.
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      <h3>Estado</h3>
      <div>
        {/* Se active for true, o botão terá o texto Ativo, caso contrário, o botão terá o texto Inativo. Ao clicar no botão, a função handleClick será executada. */}
        <button onClick={handleClick1}>
          {activeTest ? "Ativo" : "Inativo"}
        </button>

        {/* Se active for true, o botão estará habilitado e tera o texto Ativo, caso contrário, o botão estará desabilitado e tera o texto Inativo. */}
        <button disabled={!activeTest && "disabled"}>
          {activeTest ? "Ativo" : "Inativo"}
        </button>
      </div>

      <h3>UseState fora da Array (não recomendado)</h3>
      <div>
        {/* Ao clicar no botão, a função handleClick2 será executada que irá alterar o valor do estado. */}
        <button onClick={handleClick2}>
          {/* Se activeValue for true, o botão terá o texto Ativo, caso contrário, o botão terá o texto Inativo. */}
          {activeValue ? "Ativo" : "Inativo"}
        </button>
      </div>

      <h3>UseState dentro da Array (recomendado)</h3>
      <div>
        {/* Ao clicar no botão, a função handleClick2 será executada que irá alterar o valor do estado. */}
        <button onClick={handleClick3}>
          {/* Se activeValue for true, o botão terá o texto Ativo, caso contrário, o botão terá o texto Inativo. */}
          {active ? "Ativo" : "Inativo"}
        </button>
      </div>

      <h3>UseState em Objeto</h3>
      <div>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <p>{person.age}</p>
        <p>{person.study}</p>
        {/* Ao clicar no botão, a função handleClick2 será executada que irá alterar o valor do estado. */}
        <button onClick={handleClick4}>
          {/* Se activeValue for true, o botão terá o texto Ativo, caso contrário, o botão terá o texto Inativo. */}
          {person ? "Mostrar" : "Inativo"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default UseState1; // Está exportando o componente UseState1.
