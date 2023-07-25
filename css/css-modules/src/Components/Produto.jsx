// Importa a biblioteca React.
import React from "react";

// Importa o CSS Modules.
import styles from "./Produto.module.css";

// Criado um componente chama Produto.
const Produto = () => {
  console.log(styles); // O styles é um objeto que contém as classes únicas geradas pelo CSS Modules para que possamos utilizar no nosso componente sem o risco de conflito de nomes.

  return (
    <div>
      {/* Para utilizarmos as classes geradas pelo CSS Modules, basta passarmos o objeto styles e a classe que queremos utilizar. */}
      {/* Existe dois jeitos para passar o objeto styles, a primeira é passando o objeto e depois o nome da classe que queremos utilizar, a segunda é utilizando uma array, e depois uma string com o nome da classe. */}
      <h1 className={styles.title}>Notebook</h1>
      <p className={styles["price"]}>R$ 2500</p>
      <button className={styles.buy}>Comprar</button>
    </div>
  );
};

export default Produto; // Exportando o componente Produto.
