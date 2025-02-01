// pages/livros.tsx

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { ControleLivros } from '../classes/controle/ControleLivros';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Livros.module.css';

const ControleLivro = new ControleLivros();

export default function Livros() {
  const [livros, setLivros] = useState<Array<Livro>>([]);

  useEffect(() => {
    setLivros(ControleLivros.obterLivros());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>
      
      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>Lista de Livros</h1>
        <ul>
          {livros.map((livro) => (
            <li key={livro.codigo}>{livro.titulo} - {livro.autores.join(', ')}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
