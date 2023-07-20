// Está importando o React.
import React from "react";

const Formulario = () => {
  // Criado um state(estado) chamado comments e uma função chamada setComments para atualizar o valor do state(estado) comments que começa como um array vazia.
  const [comments, setComments] = React.useState([]);

  const [input, setInput] = React.useState(""); // Criado um state(estado) chamado input e uma função chamada setInput para atualizar o valor do state(estado) input que começa como uma string vazia.

  // Criado uma função chamada handleClick que é executada quando o botão é clicado.
  function handleClick() {
    if (input === "") return; // Se o valor do state(estado) input for igual a uma string vazia, então retorna nada.
    setComments([...comments, input]); // O spread operator (...) copia o array comments anteriores e adiciona o valor do state(estado) input no final do array.
    setInput(""); // Atualiza o valor do state(estado) input para uma string vazia, assim deixando o input limpo.
    inputElement.current.focus(); // O método focus() é usado para dar foco em um elemento, no caso o inputElement.
  }

  const inputElement = React.useRef(); // Criado uma referência chamada inputElement.

  // Retorna um elemento div com um ul que contém um li para cada item do array comments, um input controlado e um botão.
  return (
    <div>
      <ul>
        {/* O map percorre o array comments e retorna um li para cada item do array. */}
        {comments.map((comment) => (
          <li key={comment}>{comment}</li>
        ))}
        {/* Criado um input controlado que ao ser digitado executa a função anônima do onChange que atualiza o valor do state(estado) input. */}
      </ul>

      <input
        type="text"
        value={input}
        // Está passando a referenciar o inputElement para o input.
        ref={inputElement}
        // O evento onChange é executado toda vez que o valor do input for alterado, ou seja, toda vez que for digitado algo no input ele atualiza o valor do state(estado) do input passando o valor digitado.
        onChange={({ target }) => {
          setInput(target.value);
        }}
      />

      <br />

      {/* Criado um botão que ao ser clicado executa a função anônima do onClick que atualiza o valor do state(estado) comments. */}
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default Formulario; // Está exportando o componente Formulario.
