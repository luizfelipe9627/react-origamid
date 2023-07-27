// Importa a biblioteca React.
import React from "react";

// Importa o CSS module.
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0); // Cria um estado chamado active e uma função chamada setActive que altera o estado active. O estado active começa com o valor 0.
  const [position, setPosition] = React.useState(0); // Cria um estado chamado position e uma função chamada setPosition que altera o estado position. O estado position começa com o valor 0.

  const contentRef = React.useRef(); // Cria uma referência chamada contentRef.

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect(); // Está pegando o contentRef que é a referência da div e usando o current para pegar o elemento HTML e usando o getBoundingClientRect para pegar o tamanho do elemento, e desestruturando e puxando o width dado pelo getBoundingClientRect.

    setPosition(-(width * active)); // Está alterando o estado position para o valor do width vezes o valor do estado active, então se o estado active for 0 irá ficar 0, se for 1 irá ficar o valor do width, se for 2 irá ficar o valor do width vezes 2, e assim por diante.
  }, [active]);

  // Função chamada slidePrev que é responsável por mudar o slide para o anterior.
  function slidePrev() {
    // Está verificando se o valor do estado active é maior que 0, se for executa o código dentro do if, se não executa o código dentro do else.
    if (active > 0) {
      setActive(active - 1); // Está alterando o estado active para o valor do estado active menos 1, ou seja, está voltando um slide.
    } else {
      setActive(slides.length - 1); // Está alterando o estado active para o valor do tamanho do array slides menos 1, ou seja, está indo para o último slide.
    }
  }

  // Função chamada slideNext que é responsável por mudar o slide para o próximo.
  function slideNext() {
    // Está verificando se o valor do estado active é menor que o tamanho do array slides menos 1, se for executa o código dentro do if, se não executa o código dentro do else.
    if (active < slides.length - 1) {
      setActive(active + 1); // Está alterando o estado active para o valor do estado active mais 1, ou seja, está indo para o próximo slide.
    } else {
      setActive(0); // Está alterando o estado active para 0, ou seja, está voltando para o primeiro slide.
    }
  }

  // Retorna uma seção com a classe container e dentro dela tem uma div com a classe content que contém um map que retorna uma div com a classe nav e o texto do slide. E tem um nav com a classe nav que contém dois botões responsáveis por mudar o slide.
  return (
    <section className={styles.container}>
      <div
        // Está criando uma referência para a div, para que possa ser acessada pelo JavaScript.
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Está mapeando o array slides e retornando uma figura com a classe item que contém uma imagem e uma legenda. */}
        {slides.map((slide) => {
          return (
            <figure key={slide.id} className={styles.item}>
              <img src={slide.image} alt={slide.alt} />
              <figcaption>{slide.text}</figcaption>
            </figure>
          );
        })}
      </div>

      <nav className={styles.nav}>
        {/* Adiciona um evento de clique nos botões, que ao clicar executa a função slidePrev ou slideNext. */}
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide; // Está exportando o componente Slide.
