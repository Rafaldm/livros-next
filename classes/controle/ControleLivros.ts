// classes/controle/ControleLivros.ts
import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.", ["Bert Bates", "Kathy Sierra"]),
  new Livro(2, 2, "Java, Como Programar", "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.", ["Paul Deitel", "Harvey Deitel"]),
  new Livro(3, 3, "Core Java For The Impatient", "Readers familiar with Horstmann's, two-volume 'Core Java' books will learn how new features of Java impact the language and core libraries.", ["Cay Horstmann"]),
];

export class ControleLivros {
  static obterLivros(): import("react").SetStateAction<Livro[]> {
      throw new Error('Method not implemented.');
  }
  static getLivros(): Array<Livro> {
    return livros;
  }

  static incluir(livro: Livro): Livro {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
    return livro;
  }

  static excluir(codigo: number): boolean {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
      return true;
    }
    return false;
  }
}
