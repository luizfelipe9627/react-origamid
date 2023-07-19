// Está importando o React.
import React from "react";

const Formulario = () => {
  // Criado um state(estado) chamado comentarios e uma função chamada setComentarios para atualizar o valor do state(estado) comentarios que começa como um array vazia.
  const [comentarios, setComentarios] = React.useState([]);

  const [input, setInput] = React.useState(""); // Criado um state(estado) chamado input e uma função chamada setInput para atualizar o valor do state(estado) input que começa como uma string vazia.

  // Criado uma função chamada handleClick que é executada quando o botão é clicado.
  function handleClick() {
    if (input === "") return; // Se o valor do state(estado) input for igual a uma string vazia, então retorna nada.
    setComentarios([...comentarios, input]); // O spread operator (...) copia o array comentarios anteriores e adiciona o valor do state(estado) input no final do array.
    setInput(""); // Atualiza o valor do state(estado) input para uma string vazia, assim deixando o input limpo.
    inputElement.current.focus(); // O método focus() é usado para dar foco em um elemento, no caso o inputElement.
  }

  const inputElement = React.useRef(); // Criado uma referência chamada inputElement.

  // Retorna um elemento div com um ul que contém um li para cada item do array comentarios, um input controlado e um botão.
  return (
    <div>
      <ul>
        {/* O map percorre o array comentarios e retorna um li para cada item do array. */}
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
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

      {/* Criado um botão que ao ser clicado executa a função anônima do onClick que atualiza o valor do state(estado) comentarios. */}
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default Formulario; // Está exportando o componente Formulario.
