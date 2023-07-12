// Está importando as bibliotecas do React e do ReactDOM.
import ReactDOM from 'react-dom/client';
import React from 'react';

// Está importando o componente App.
import App from './App';

// Está renderizando o componente App dentro do elemento root que está no index.html
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
