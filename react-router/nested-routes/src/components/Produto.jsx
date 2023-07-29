// Importa a biblioteca React.
import React from "react";

// Importa os componentes da biblioteca react-router-dom.
import { useParams, Routes, Route, NavLink } from "react-router-dom";

// Está importando os componentes.
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";

// Criado um componente chamado Produto.
const Produto = () => {
  const params = useParams(); // O useParams é um hook que retorna os parâmetros da rota dinâmica, ou seja, retorna o id que foi passado na rota.

  // Retorna uma div com um h1 e um nav com os links para as rotas.
  return (
    <div>
      {/* Está mostrando o id que foi passado na rota dinâmica. */}
      <h1>Produto: {params.id}</h1>

      <nav>
        {/* O NavLink é responsável por adicionar uma classe ao link quando ele estiver ativo, ou seja, quando a rota for acessada. */}
        <NavLink to="">Descrição</NavLink>
        {" | "}
        <NavLink to="avaliacao">Avaliação</NavLink>
        {" | "}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>

      {/* Pode ser usado dessa forma em arquivos separados ou pode ser usado dentro do Routes no arquivo App.jsx. */}
      {/* O Routes é o componente que vai conter todas as rotas da aplicação. */}
      <Routes>
        {/* O Route é o componente que vai conter cada rota da aplicação. */}
        {/* O path é o caminho da rota. */}
        {/* O element é o componente que vai ser renderizado quando a rota for acessada. */}

        {/* Renderiza o componente ProdutoDescricao quando a rota: / for acessada, ou seja, a rota raiz. */}
        <Route path="/" element={<ProdutoDescricao />} />

        {/* Renderiza o componente ProdutoAvaliacao quando a rota: /avaliacao for acessada. */}
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />

        {/* Renderiza o componente ProdutoCustomizado quando a rota: /customizado for acessada. */}
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto; // Está exportando o componente Produto.
