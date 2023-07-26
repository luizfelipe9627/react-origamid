// Importa a biblioteca React.
import React from "react";

// Importa o componente Card do React Bootstrap.
import { Card } from "react-bootstrap";

// Criado um componente chamado App.
const App = () => {
  // Retorna dois cards, um usando o Bootstrap e outro usando o React Bootstrap.
  return (
    <React.Fragment>
      <h2 className="m-5">Utilizando Bootstrap</h2>
      {/* Está usando o Bootstrap para estilizar os elementos, cada classe do
      Bootstrap já possui estilos CSS prontos. */}
      <div
        className="card bg-dark text-white m-5"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$ 2500</h5>
          <p className="card-text">
            Esse é um notebook com 1tb, 16gb de ram e placa de video de 16gb.
          </p>
        </div>
      </div>

      <h2 className="m-5">Utilizando React Bootstrap</h2>
      {/* Está usando o componente Card do React Bootstrap e as propriedades do componente com estilos CSS prontos. */}
      {/* O React Bootstrap é um conjunto de componentes do Bootstrap para o React, então é possível usar as propriedades do Bootstrap no React. */}
      <Card
        bg="dark"
        text="white"
        className="m-5"
        style={{ maxWidth: "18rem" }}
      >
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>
            Esse é um notebook com 1tb, 16gb de ram e placa de video de 16gb.
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
