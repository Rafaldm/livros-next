// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros'; // Importando ControleLivros

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const livros = ControleLivros.getLivros();  // Obtendo todos os livros
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const livro = req.body;  // Pegando o corpo da requisição (livro a ser incluído)
            const resultado = ControleLivros.incluir(livro);  // Incluir livro
            res.status(200).json({ mensagem: 'Livro incluído com sucesso', livro: resultado });
        } else {
            res.status(405).json({ mensagem: 'Método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};
