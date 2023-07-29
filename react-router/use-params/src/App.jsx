// Importa a biblioteca React.
import React from "react";

// Importa os componentes da biblioteca react-router-dom.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa os componentes.
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Produto from "./components/Produto";

// Criado um componente chamado App.
const App = () => {
  // Retorna um BrowserRouter que encapsula toda a aplicação e dentro dele tem um Routes que contém todas as rotas da aplicação.
  return (
    // O BrowserRouter é o componente que vai encapsular toda a aplicação.
    <BrowserRouter>
      {/* O Header é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
      <Header />
      {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
      <Routes>
        {/* O Route é o componente que vai conter cada rota da aplicação. */}
        {/* O path é o caminho da rota. */}
        {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

        {/* Renderiza o componente Home quando a rota: / for acessada, ou seja, a rota raiz. */}
        <Route path="/" element={<Home />} />

        {/* Renderiza o componente About quando a rota: /about for acessada. */}
        <Route path="about" element={<About />} />

        {/* Renderiza o componente Login quando a rota: /login for acessada. */}
        <Route path="login" element={<Login />} />

        {/* Renderiza o componente Produto quando a rota: /produto for acessada. No path tem :id porque é uma rota dinâmica, ou seja, o id vai ser passado como parâmetro na rota. Pode ser qualquer nome ao invés de id. */}
        <Route path="produto/:id" element={<Produto />} />

        {/* Renderiza o componente NotFound quando a rota: * for acessada, ou seja, qualquer rota que não exista. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; // Está exportando o componente App.
