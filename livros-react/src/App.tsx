import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados'; // Importar LivroDados para a rota

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dados">
              Novo
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
