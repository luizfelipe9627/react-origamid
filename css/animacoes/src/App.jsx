// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Slide from "./Components/Slide/Slide.jsx";

// Importa as imagens.
import image1 from "./assets/foto1.webp";
import image2 from "./assets/foto2.webp";
import image3 from "./assets/foto3.webp";

// Criado um componente chamado App.
const App = () => {
  // Criado uma array com 3 objetos, cada objeto representa um slide.
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
      image: image1,
      alt: "Imagem 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
      image: image2,
      alt: "Imagem 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
      image: image3,
      alt: "Imagem 3",
    },
  ];

  return (
    <React.Fragment>
      <Slide slides={slides} />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
