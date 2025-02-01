// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';  // Importando o ControleEditora

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const codEditora = Number(req.query.codEditora);  // Pegando o codEditora da URL
            const nomeEditora = ControleEditora.getNomeEditora(codEditora);  // Chamando o método estático
            res.status(200).json({ nome: nomeEditora });
        } else {
            res.status(405).json({ mensagem: 'Método não permitido' });
        }
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};
