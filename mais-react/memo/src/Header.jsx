// Importa a biblioteca React.
import React from 'react'

// Cria um componente chamado Header.
const Header = () => {
  console.log('Header renderizou!'); // Imprime no console a mensagem Header renderizou!.

  // Retorna uma div com um elemento h1.
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header); // Está exportando o componente Header usando o React.memo(), que é um componente de ordem superior que faz com que o componente Header só seja renderizado novamente se as suas propriedades forem alteradas.