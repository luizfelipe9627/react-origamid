// Importa a biblioteca React.
import React from "react";

// Criado uma classe chamada Produtos que herda de React.Component, ou seja, tornando o Produtos um componente.
class Produtos extends React.Component {
  // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe, está sendo passado um parâmetro chamado props que é um objeto que contém todas as propriedades passadas para o componente.
  constructor(props) {
    super(props); // Chama o construtor da classe pai, no caso React.Component.
    // Define um estado com a propriedade count e o valor inicial 0.
    this.state = {
      count: 0,
    };

    // Recria a função handleClick e define o this como o contexto atual do componente Produtos, ou seja, o this dentro da função handleClick será o componente Produtos.
    this.handleClick = this.handleClick.bind(this);
  }

  // O método componentDidMount é executado após o componente ser renderizado/montado na tela.
  componentDidMount() {
    console.log("Componente Produtos montado");
  }

  // O método componentDidUpdate é executado após o componente ser atualizado, ou seja, após o estado ou as propriedades do componente serem atualizadas.
  componentDidUpdate() {
    console.log("Componente Produtos atualizado");
  }

  // O método componentWillUnmount é executado antes do componente ser removido da tela.
  componentWillUnmount() {
    console.log("Componente Produtos desmontado");
  }

  // Criado uma função chamada handleClick que atualiza o estado do componente, utilizando o método setState e passando um objeto com a propriedade count e o valor atual do estado mais 1 a cada clique.
  handleClick() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  // O render é um método obrigatório em um componente React, ele é responsável por renderizar o componente na tela.
  render() {
    // Retorna uma div com um h1 que recebe o valor da propriedade titulo, um parágrafo que recebe o valor do estado count e um botão que ao ser clicado chama uma função que atualiza o estado do componente, utilizando o método setState e passando um objeto com a propriedade count e o valor atual do estado mais 1 a cada clique.
    return (
      <div>
        {/* Como é uma classe, para acessar as propriedades é necessário usar o this seguido de props e o nome da propriedade definida no componente pai, no caso App. */}
        <h1>{this.props.titulo}</h1>

        <p>{this.state.count}</p>

        {/* Criado um botão que ao ser clicado chama uma função anônima que atualiza o estado do componente, utilizando o método setState e passando um objeto com a propriedade count e o valor atual do estado mais 1 a cada clique. */}
        {/* 
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Adicionar</button>
        */}

        {/* Forma alternativa de atualizar o estado do componente, passando uma função que recebe o estado atual do componente e retorna um objeto com a propriedade count e o valor atual do estado mais 1 a cada clique. */}
        {/*
          <button onClick={this.setState((state) => ({ count: state.count + 1 }))}>Adicionar</button>
        */}

        {/* Forma alternativa de atualizar o estado do componente, passando uma função que recebe o estado atual do componente e retorna um objeto com a propriedade count e o valor atual do estado mais 1 a cada clique. */}
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos; // Está exportando o componente Produtos.
