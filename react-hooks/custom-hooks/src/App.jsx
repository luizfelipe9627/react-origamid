// Importa a biblioteca React.
import React from "react";

// Importa o hook useLocalStorage.
import useLocalStorage from "./Hooks/useLocalStorage";
import useFetch from "./Hooks/useFetch";

// Criado um componente chamado App.
const App = () => {
  const [product, setProduct] = useLocalStorage("product", ""); // Cria um estado com o nome product e uma função com o nome setProduct para atualizar o estado. O useLocalStorage está sendo usado para armazenar o valor do localStorage com a chave product e o valor inicial vazio.

  const { requestAPI, data, loading, error } = useFetch(); // Está chamando o hook useFetch e desestruturando a função requestAPI e os estados data, loading e error.

  // O useEffect irá executar seu escopo toda vez que o estado requestAPI for alterado.
  React.useEffect(() => {
    // Criado uma função chamada fetchData responsável por fazer a requisição, está usando o async/await para esperar a requisição ser feita e quando for feita armazena o valor na variável response e json.
    async function fetchData() {
      // Está desestruturando a resposta da requisição e a resposta convertida para JSON da requestAPI e esperando a requisição ser feita quando for feita armazena o valor na variável response e json.
      const { response, json } = await requestAPI(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
      console.log(response, json); // Está mostrando no console a resposta da requisição e a resposta convertida para JSON.
    }
    fetchData(); // Está chamando a função fetchData.
  }, [requestAPI]);

  // Criado uma função chamada handleClick responsável por atualizar o estado product, está desestruturando e recebendo um evento como parâmetro.
  function handleClick({ target }) {
    setProduct(target.innerText); // Está atualizando o estado product com o valor do texto do botão clicado.
  }

  if (error) return <p>{error}</p>; // Está verificando se o estado error é verdadeiro, se for retorna um elemento p com o valor do estado error.

  if (loading) return <p>Carregando...</p>; // Está verificando se o estado loading é verdadeiro, se for retorna um elemento p com o texto Carregando...

  // Se o estado data for verdadeiro executa o código abaixo.
  if (data) {
    // Retorna um elemento div com um elemento h1 e dois elementos button. O h1 está mostrando o valor do estado product. Os botões estão chamando a função handleClick quando forem clicados.
    return (
      <div>
        <h1>Produto preferido: {product}</h1>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {/* Está verificando se o estado data é verdadeiro, se for faz um map para percorrer o array e retorna um elemento div com o nome do produto a cada iteração. */}
        {data &&
          data.map((product) => (
            <div key={product.id}>
              <p>{product.nome}</p>
            </div>
          ))}
      </div>
    );
  }
  return null; // Se o estado data for falso retorna null.
};

export default App; // Está exportando o componente App.
