import React, { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros'; // Acesso ao controlador de livros
import { ControleEditora } from './controle/ControleEditora'; // Acesso ao controlador de editoras
import { useNavigate } from 'react-router-dom';

// Lista de autores como exemplo, substitua isso pela sua lógica
const autoresDisponiveis = [
  { value: 'Paul Deitel', text: 'Paul Deitel' },
  { value: 'Harvey Deitel', text: 'Harvey Deitel' },
  { value: 'Bert Bates', text: 'Bert Bates' },
  { value: 'Kathy Sierra', text: 'Kathy Sierra' },
  { value: 'Cay Horstmann', text: 'Cay Horstmann' },
];

const LivroDados = () => {
  const [livro, setLivro] = useState({
    titulo: '',
    autores: [],  // Mantendo autores como um array
    ano: '',
    editora: 0, // Código da editora (inicialmente 0, será atualizado)
  });

  const [opcoesEditoras, setOpcoesEditoras] = useState([]);
  const [opcoesAutores, setOpcoesAutores] = useState(autoresDisponiveis); // Autores carregados
  const navigate = useNavigate();

  // Carregar editoras
  useEffect(() => {
    setOpcoesEditoras(ControleEditora.getEditoras().map(e => ({ value: e.codEditora, text: e.nome })));
  }, []);

  // Atualizar o estado dos dados do livro conforme os campos são preenchidos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  // Lidar com a seleção da editora
  const tratarComboEditora = (e) => {
    setLivro({ ...livro, editora: Number(e.target.value) });  // Garantir que seja numérico
  };

  // Lidar com a seleção dos autores (permitindo múltiplas seleções)
  const tratarComboAutores = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setLivro({ ...livro, autores: selectedOptions });
  };

  // Incluir o livro no controlador
  const incluir = (e) => {
    e.preventDefault();
    
    // Criar o novo livro, passando autores como array de strings
    const novoLivro = { 
      ...livro, 
      autores: livro.autores, // Array de autores
    };

    // Chama o controlador para incluir o livro
    ControleLivros.incluir(novoLivro);

    // Redireciona para a página principal (lista de livros)
    navigate('/');
  };

  return (
    <div className="livro-dados">
      <h2>Dados do Livro</h2>
      <form onSubmit={incluir}>
        <div className="form-group mt-2">
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Resumo:</label>
          <textarea
            name="resumo"
            value={livro.resumo}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Editora:</label>
          <select
            name="editora"
            value={livro.editora}
            onChange={tratarComboEditora}
            className="form-control"
            required
          >
            <option value={0} disabled>Selecione a Editora</option>
            {opcoesEditoras.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mt-2">
          <label>Autores (1 por linha):</label>
          <select
            name="autores"
            value={livro.autores}
            onChange={tratarComboAutores}
            className="form-control"
            required
          >
            {opcoesAutores.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Salvar Dados
        </button>
      </form>
    </div>
  );
};

export default LivroDados;
