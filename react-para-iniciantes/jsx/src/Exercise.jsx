import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo. Não utilize CSS externo, use o style para mudar as cores, se a situação estiver ativa pinte de verde, inativa vermelho. Se o gasto for maior que 10000 mostre uma mensagem.
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

// Criado um componente chamado Exercise.
const Exercise = () => {
  const dados = luana; //

  // Criado uma constante chamada total que recebe o valor de todas as compras somadas.
  // O map é utilizado para percorrer o array de compras e retornar um novo array com os valores do preço.
  const total = dados.compras
    .map(
      (item) => Number(item.preco.replace('R$ ', '')), // Pega o valor do preço e remove o R$ usando o replace e por fim converte para número.
    )
    .reduce((a, b) => a + b); // O reduce é utilizado para somar todos os valores do array. O a é o valor anterior e o b é o valor atual ele vai somando os valores até chegar no final do array e retorna o valor total.

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        {/* Aplica uma cor no span, se dados.ativa for true ele aplica a cor verde se for false ele aplica a cor vermelha. */}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {/* Se dados.ativa for true ele mostra Ativa se for false mostra Inativa. */}
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {/* Se o total for maior que 10000 e o p for true(no caso por padrão o p é true) ele mostra a mensagem Você está gastando muito! */}
      {total > 10000 && <p>Você está gastando muito!</p>}
    </div>
  );
};

export default Exercise; // Está exportando o componente Exercise.
