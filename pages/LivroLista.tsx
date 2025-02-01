import { useEffect, useState } from 'react';
import { Livro } from '../classes/modelo/Livro';
import { LinhaLivro } from '../componentes/LinhaLivro';

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        setLivros(data);
        setCarregado(true);
      });
  }, []);

  const excluirLivro = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });

    if (resposta.ok) {
      setLivros(livros.filter((livro) => livro.codigo !== codigo));
    }
  };

  if (!carregado) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Lista de Livros</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Autores</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={() => excluirLivro(livro.codigo)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivroLista;
