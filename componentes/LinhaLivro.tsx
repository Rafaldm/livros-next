import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  // Obter o nome da editora
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>
        <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};
