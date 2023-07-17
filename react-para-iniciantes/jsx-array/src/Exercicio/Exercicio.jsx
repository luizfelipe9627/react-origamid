// Organize os produtos como mostrado no vídeo, mostre apenas produtos que forem mais caros que R$ 1500.
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

// Criado um componente chamado Exercicio.
const Exercicio = () => {
  // O filter filtra os elementos da array produtos e retorna uma nova array com os elementos que passaram no filtro.
  // Está desestruturando(pegando apenas o atributo preco) o atributo preco de cada objeto da array produtos.
  const dadosFiltrados = produtos.filter(({ preco }) =>
    // O replace é utilizado para substituir um valor por outro. Nesse caso, está substituindo o R$ por nada e transformando o valor em um número.
    Number(preco.replace("R$ ", "") > 1500),
  );

  return (
    <section>
      {/* O map passa por cada elemento da array e a cada iteração retorna os atributos desestruturados de cada objeto. */}
      {dadosFiltrados.map(({ id, nome, preco, cores }) => {
        return (
          <div key={id}>
            {/* Está criando um H1 com o valor do atributo nome. */}
            <h1>{nome}</h1>
            {/* Está criando um parágrafo com o valor do atributo preco. */}
            <p>Preço: {preco}</p>
            <ul>
              {/* O map passa por cor do elemento cores e a cada iteração retorna a cor como valor do parâmetro. */}
              {cores.map((cor) => (
                // Está criando uma li para cada elemento da array cores e atribuindo como valor da key o elemento da array.
                <li style={{ backgroundColor: cor, color: "#fff" }} key={cor}>
                  {/* Está mostrando o valor do atributo cor. */}
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Exercicio; // Está exportando o componente Exercicio.
