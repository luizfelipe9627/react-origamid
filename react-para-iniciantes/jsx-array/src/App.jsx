// Importa o React.
import React from "react";

// Criado um componente chamado App.
const App = () => {
  // O key é utilizado para identificar cada elemento da lista. O React utiliza o key para saber qual elemento foi alterado, adicionado ou removido.

  const products = [<li key="e1">Notebook</li>, <li key="e2">Smartphone</li>]; // Criado uma array de produtos contendo duas li.

  const movies = ["Before Sunrise", "Before Sunset", "Before Midnight"]; // Criado uma array de filmes contendos três strings.

  // Criado uma array de objetos tendo três objetos cada um com dois atributos.
  const books = [
    { name: "A Game of Thrones", year: 1996 },
    { name: "A Clash of Kings", year: 1998 },
    { name: "A Storm of Swords", year: 2000 },
  ];

  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      {/* Mostra o conteúdo da variável products, nesse caso, uma array contendo duas li */}
      {products}
      <ul>
        {/* O map passa por cada elemento da array e a cada iteração retorna um elemento da array. */}
        {movies.map((movie, index) => (
          // Dentro do map cria uma li para cada elemento da array movies e atribuindo a key o elemento da array.
          <li key={movie}>{movie}</li>
        ))}
      </ul>

      <ul>
        {/* O filter filtra os elementos da array e retorna uma nova array com os elementos que passaram no filtro. Nesse caso, está filtrando e retornando os elementos que tem o ano maior ou igual a 1999. */}
        {/* O map passa por cada elemento da array e a cada iteração retorna um elemento da array. Dentro do parâmetro do map é feito uma desestruturação para pegar os atributos de cada objeto nesse caso o que tiver o nome name e year. */}
        {books
          .filter(({ year }) => year >= 1998)
          .map(({ name, year }) => (
            // Dentro do map cria uma li para cada elemento da array books e atribui como valor da key o atributo name do objeto.
            <li key={name}>
              {/* Mostra o atributo name e year de cada objeto. */}
              {name}, {year}
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
