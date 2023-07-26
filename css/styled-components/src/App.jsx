// Importa a biblioteca React.
import React from "react";

// Importa a biblioteca styled-components.
import styled from "styled-components";

//* > Componentes com styled-components.

// Criado um componente chamado ProductsContainer que recebe uma div tendo seu estilo definido diretamente no componente.
const ProductsContainer = styled.div`
  display: flex;
`;

const Product = styled.div`
  flex: 1;
`;

// Criado um componente chamado Title que recebe uma tag h1  tendo seu estilo definido diretamente no componente.
const Title = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

// Criado um componente chamado Paragraph que recebe uma tag p  tendo seu estilo definido diretamente no componente.
const Paragraph = styled.p`
  font-size: 1.5rem;
  color: green;
`;

//* > JavaScript com styled-components.

// Criado uma função chamada template que recebe um valor.
function template(value, total) {
  console.log(value); // Imprime o valor recebido.
  console.log(total); // Imprime o total recebido.
}

const total = 1000; // Cria uma constante chamada total com o valor 1000.

template`Isso é ${total} um teste`; // Chama a função template passando um valor e o total como parâmetro.

// Criado um componente chamado Price que recebe uma tag p tendo seu estilo definido diretamente no componente utilizando JavaScript.
const Price = styled.p`
  // A propriedade background-color recebe o valor da propriedade color definida no componente.
  background-color: ${({ color }) => color};

  // A propriedade background recebe um valor aleatório até no máximo o número 360 a cada renderização.
  // background: hsl(${Math.random() * 360}, 100%, 50%);

  color: white;
`;

//* > UseState com styled-components.

// Criado um componente chamado Buy que recebe uma tag button tendo seu estilo definido diretamente no componente utilizando useState.
const Buy = styled.button`
  // A propriedade background recebe o valor #000 se o estado active for true, caso contrário, recebe o valor #fff.
  background: ${({ active }) => (active ? "#000" : "#fff")};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  // A propriedade color recebe o valor #fff se o estado active for true, caso contrário, recebe o valor #000.
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
`;

//* > Pseudo-classes com styled-components.

// Criado um componente chamado Link que recebe uma tag a tendo seu estilo definido diretamente no componente.
const Link = styled.a`
  font-size: 1rem;
  color: #000;
  text-decoration: none;
  // A propriedade &:hover é uma pseudo-classe da tag a que recebe um estilo quando o mouse passa por cima da tag.
  &:hover {
    color: #00ff;
    text-decoration: underline;
  }
`;

// Criado um componente chamado App.
const App = () => {
  const [active, setActive] = React.useState(false); // Criado um estado chamado active que recebe o valor false e a função setActive que altera o valor do estado.

  // Criado uma função chamada handleClick que altera o valor do estado active.
  function handleClick() {
    setActive(!active); // Altera o valor do estado active para o valor contrário do estado atual, no caso, se o estado active for true, ele passa a ser false e vice-versa.
  }

  // Retorna uma div com os componentes Buy, ProductsContainer, Product, Title, Paragraph, Price e Link.
  return (
    <div>
      {/* Renderiza o componente Buy passando como parâmetro o estado active e a função handleClick que executa ao clicar no botão. O componente Buy cria uma tag button com o texto Compre aqui. */}
      <Buy active={active} onClick={handleClick}>
        Compre aqui
      </Buy>

      {/* Renderiza o componente ProductsContainer que cria uma div com display flex. */}
      <ProductsContainer>
        {/* Renderiza o componente Product que cria uma div com flex 1. */}
        <Product>
          {/* Renderiza o componente Title que cria uma tag h1 com o texto Meu titulo. */}
          <Title>Notebook</Title>
          {/* Renderiza o componente Paragraph que cria uma tag p com o texto Meu paragrafo. */}
          <Paragraph>Descrição do produto...</Paragraph>

          {/* Renderiza o componente Price passando como parâmetro do background-color o valor #84e. O componente Price cria uma tag p com o texto R$ 2000,00. */}
          <Price color="#84e">R$ 2000,00</Price>

          {/* Renderiza o componente Link que cria uma tag a com o texto Outros produtos. */}
          <Link href="#">Outros produtos</Link>
        </Product>

        {/* Renderiza o componente Product que cria uma div com flex 1. */}
        <Product>
          {/* Renderiza o componente Title que cria uma tag h1 com o texto Meu titulo. */}
          <Title>Smartphone</Title>
          {/* Renderiza o componente Paragraph que cria uma tag p com o texto Meu paragrafo. */}
          <Paragraph>Descrição do produto...</Paragraph>

          {/* Renderiza o componente Price passando como parâmetro do background-color o valor #53d956. O componente Price cria uma tag p com o texto R$ 2000,00. */}
          <Price color="#53d956">R$ 2000,00</Price>

          {/* Renderiza o componente Link que cria uma tag a com o texto Outros produtos. */}
          <Link href="#">Outros produtos</Link>
        </Product>
      </ProductsContainer>
    </div>
  );
};

export default App; // Está exportando o componente App.
