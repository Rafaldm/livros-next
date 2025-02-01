import { useState } from 'react';
import { useRouter } from 'next/router';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

const baseURL = "http://localhost:3000/api/livros";

const LivroDados: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);
  const router = useRouter();

  const opcoes = ControleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const incluirLivro = async (evento: React.FormEvent) => {
    evento.preventDefault();
    const novoLivro = new Livro(0, codEditora, titulo, resumo, autores.split('\n'));
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoLivro),
    });

    if (resposta.ok) {
      router.push('/livros');
    }
  };

  return (
    <div>
      <h2>Cadastrar Livro</h2>
      <form onSubmit={incluirLivro}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Resumo</label>
          <textarea
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Autores (separados por linha)</label>
          <textarea
            className="form-control"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Editora</label>
          <select
            className="form-control"
            value={codEditora}
            onChange={(e) => setCodEditora(Number(e.target.value))}
            required
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default LivroDados;
