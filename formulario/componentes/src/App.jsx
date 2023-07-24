// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";
import Checkbox from "./Form/Checkbox";

// Criado um componente chamado App.
const App = () => {
  // Criado os estados name, email, product, color, fruit e languages que recebem o valor inicial vazio do tipo string.
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [color, setColor] = React.useState("");
  const [fruit, setFruit] = React.useState("");

  // Criado o estado languages e terms que recebe o valor inicial vazio do tipo array.
  const [languages, setLanguages] = React.useState([]);
  const [terms, setTerms] = React.useState([]);

  // Retorna uma div com o texto App React.
  return (
    <form>
      <h2>Input</h2>
      <h4>Formulário</h4>
      {/* Está chamando o componente Input e passando os atributos label, id, value e setValue para o componente Input. */}
      <Input id="name" label="Nome" value={name} setValue={setName} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>

      <h2>Select</h2>
      <h4>Produtos</h4>
      {/* Está chamando o componente Select e passando os atributos options, value e setValue para o componente Select. */}
      <Select
        options={["Smartphone", "Notebook"]}
        value={product}
        setValue={setProduct}
        disabled
      />

      <h2>Radio</h2>
      <h4>Cores</h4>
      {/* Está chamando o componente Radio e passando os atributos options, value e setValue para o componente Radio. */}
      <Radio
        options={["Vermelho", "Verde", "Azul"]}
        value={color}
        setValue={setColor}
      />
      <h4>Frutas</h4>
      {/* Está chamando o componente Radio e passando os atributos options, value e setValue para o componente Radio. */}
      <Radio
        options={["Melancia", "Laranja", "Maçã"]}
        value={fruit}
        setValue={setFruit}
      />

      {/* Está chamando o componente Checkbox e passando os atributos options, value e setValue para o componente Checkbox. */}
      <h2>Checkbox</h2>
      <h4>Linguagens de Programação</h4>
      <Checkbox
        options={["JavaScript", "Python", "C#"]}
        value={languages}
        setValue={setLanguages}
      />

      {/* Está chamando o componente Checkbox e passando os atributos options, value e setValue para o componente Checkbox. */}
      <h4>Termos e Condições</h4>
      <Checkbox
        options={["Li e aceito os termos e condições."]}
        value={terms}
        setValue={setTerms}
      />
    </form>
  );
};

export default App; // Está exportando o componente App.
