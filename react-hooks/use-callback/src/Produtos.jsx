// Importa a biblioteca React.
import React from "react";

// O set é uma estrutura de dados que não aceita valores duplicados, então se você tentar adicionar um valor que já existe, ele não vai adicionar.
const set1 = new Set();
const set2 = new Set();

const Produtos = () => {
  // Criado uma função chamada function1 que vai ser executada toda vez que o componente for renderizado.
  function function1() {
    console.log("Função normal"); // Mostra no console a mensagem.
  }

  //* > useCallback.

  // O useCallback serve para memorizar uma função, para que ela não seja recriada toda vez que o componente for renderizado. Será executado apenas uma vez por conta do array de dependências([]) vazio.
  const function2 = React.useCallback(() => {
    console.log("Função de callback"); // Mostra no console a mensagem.
  }, []);

  set1.add(function1); // Adiciona a função1 no set1.
  set2.add(function2); // Adiciona a função2 no set2.

  console.log("Set1", set1); // A cada clique no button a função1 é adicionada no set1.
  console.log("Set2", set2); // A cada clique no button a função2 não é adicionada no set2, pois ela já foi memorizada pelo useCallback.

  // Retorna um elemento div com 2 parágrafos que ao serem clicados executam as funções function1 e function2.
  return (
    <div>
      <p onClick={function1}>Função normal</p>
      <p onClick={function2}>Função com useCallback</p>
    </div>
  );
};

export default Produtos; // Está exportando o componente Produtos.
