// Importa a biblioteca React.
import React from "react";

// Importa o componente da biblioteca react-router-dom.
import { useNavigate } from "react-router-dom";

// Criado um componente chamado Login.
const Login = () => {
  const navigate = useNavigate(); // Atribui o hook useNavigate a uma constante.

  // Função chamada handleClick que vai ser chamada quando o botão for clicado.
  function handleClick() {
    console.log("Logou!");
    navigate("/"); // Navega para a rota: /, que é a rota raiz.
  }

  // Retorna uma div com um título e um botão.
  return (
    <div>
      <h1>Login</h1>
      {/* O método handleClick é chamado quando o botão é clicado. */}
      <button onClick={handleClick}>Logar</button>
    </div>
  );
};

export default Login; // Está exportando o componente Header.
