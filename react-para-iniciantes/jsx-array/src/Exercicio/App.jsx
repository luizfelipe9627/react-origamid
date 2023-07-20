// Organize os produtos como mostrado no vídeo, mostre apenas produtos que forem mais caros que R$ 1500.
const produtos = [
  {
    id: 1,
    name: "Smartphone",
    price: "R$ 2000",
    colors: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    name: "Notebook",
    price: "R$ 3000",
    colors: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    name: "Tablet",
    price: "R$ 1500",
    colors: ["#365069", "#47c1c8", "#f95786"],
  },
];

// Criado um componente chamado App.
const App = () => {
  // O filter filtra os elementos da array produtos e retorna uma nova array com os elementos que passaram no filtro.
  // Está desestruturando(pegando apenas o atributo price) o atributo price de cada objeto da array produtos.
  const dadosFiltrados = produtos.filter(({ price }) =>
    // O replace é utilizado para substituir um valor por outro. Nesse caso, está substituindo o R$ por nada e transformando o valor em um número.
    Number(price.replace("R$ ", "") > 1500),
  );

  // Retorna uma section com o conteúdo da variável dadosFiltrados.
  return (
    <section>
      {/* O map passa por cada elemento da array e a cada iteração retorna os atributos desestruturados de cada objeto. */}
      {dadosFiltrados.map(({ id, name, price, colors }) => {
        return (
          <div key={id}>
            {/* Está criando um H1 com o valor do atributo name. */}
            <h1>{name}</h1>
            {/* Está criando um parágrafo com o valor do atributo price. */}
            <p>Preço: {price}</p>
            <ul>
              {/* O map passa por color do elemento colors e a cada iteração retorna a color como valor do parâmetro. */}
              {colors.map((color) => (
                // Está criando uma li para cada elemento da array colors e atribuindo como valor da key o elemento da array.
                <li style={{ backgroundColor: color, color: "#fff" }} key={color}>
                  {/* Está mostrando o valor do atributo color. */}
                  {color}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default App; // Está exportando o componente App.
