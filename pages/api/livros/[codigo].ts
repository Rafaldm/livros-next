// pages/api/livros/[codigo].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros'; // Importando ControleLivros

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            const codLivro = Number(req.query.codigo);  // Pegando o código do livro da URL
            const sucesso = ControleLivros.excluir(codLivro);  // Excluindo o livro
            if (sucesso) {
                res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
            } else {
                res.status(404).json({ mensagem: 'Livro não encontrado' });
            }
        } else {
            res.status(405).json({ mensagem: 'Método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};
