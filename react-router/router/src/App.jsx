// Importa a biblioteca React.
import React from "react";

// Importa os componentes da biblioteca react-router-dom.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa os componentes.
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

// Criado um componente chamado App.
const App = () => {
  // Retorna o componente BrowserRouter, encapsulando o componente Header, Routes e Footer.
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

        {/* Renderiza o componente NotFound quando a rota: * for acessada, ou seja, qualquer rota que não exista. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* O Footer é o componente que vai estár presente em todas as rotas, pois está fora do Routes. */}
      <Footer />
    </BrowserRouter>
  );
};

export default App; // Está exportando o componente App.
