// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import DogSvg from "./assets/svg/DogSvg";

// Importa as imagens.
import photo from "./assets/img/photo.jpg";
// Importa o ReactComponent que pode ser chamado pelo nome dog.
import { ReactComponent as Dog } from "./assets/svg/dog.svg";

// Importa o CSS.
import "./App.css";

// Criado um componente chamado App.
const App = () => {
  const [eyes, setEyes] = React.useState(0); // Cria um estado com o valor inicial de 5.

  // Função chamada increaseEyes que aumenta o valor dos olhos em 1.
  function increaseEyes() {
    setEyes((prevState) => prevState + 1); // Altera o valor do estado para o valor anterior + 1.
  }

  // Função chamada decreaseEyes que diminui o valor dos olhos em 1.
  function decreaseEyes() {
    setEyes((prevState) => prevState - 1); // Altera o valor do estado para o valor anterior - 1.
  }

  // Retorna uma div com os componentes Dog, DogSvg, a imagem por CSS e a imagem JPG.
  return (
    <div>
      {/* Chama o componente dog que originalmente é o ReactComponent. */}
      <Dog />

      {/* Chama o componente DogSvg que retorna um SVG definindo a cor e o tamanho dos olhos do svg. */}
      <DogSvg color="blue" eyes="5" />

      {/* Podemos também alterar o valor dos olhos do SVG utilizando useState. */}
      <DogSvg color="red" eyes={eyes} />

      {/* Ao clicar nos botões, o valor dos olhos é alterado. */}
      <button onClick={increaseEyes}>Aumentar olhos</button>
      <button onClick={decreaseEyes}>Diminuir olhos</button>

      {/* Adiciona a imagem por CSS. */}
      <p className="fundo"></p>

      {/* Adiciona a imagem JPG. */}
      <img src={photo} alt="Cachorro" />
    </div>
  );
};

export default App; // Está exportando o componente App.
