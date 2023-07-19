// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import Titulo from "./Titulo";
import Produto from "./Produto";

// Criado um componente chamado Produtos.
const Produtos = () => {
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  // Retorna uma section com o título Produtos e um map que retorna o componente Produto com o parâmetro key com o valor atribuido, o parâmetro nome com o valor atribuido e o parâmetro propriedades com o valor atribuido.
  return (
    <section>
      {/* Chama o componente Titulo e passa o parâmetro texto com o valor atribuido. */}
      <Titulo texto="Produtos" />

      {/* O map passa por cada item do array produtos e executa o escopo, como seu parâmetro foi desestruturado, ele retorna o nome e as propriedades de cada item do array. */}
      {produtos.map(({ nome, propriedades }) => (
        // Chama o componente Produto e passa o parâmetro key com o valor atribuido, o parâmetro nome com o valor atribuido e o parâmetro propriedades com o valor atribuido.
        <Produto key={nome} nome={nome} propriedades={propriedades} />
      ))}
    </section>
  );
};

export default Produtos; // Está exportando o componente Produtos.
