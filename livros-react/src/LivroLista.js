import React, { useState, useEffect } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <div>
          <strong>{livro.titulo}</strong>
        </div>
        <button onClick={() => excluir(livro.codigo)} className="btn btn-danger mt-2">
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const dadosLivros = ControleLivros.obterLivros();
    setLivros(dadosLivros);
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    ControleLivros.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table className="table">
        <thead>
          <tr style={{ backgroundColor: "black", color: "white" }}>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
