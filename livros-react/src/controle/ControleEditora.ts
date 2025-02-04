import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  new Editora(1, "Alta Books"),
  new Editora(2, "Pearson"),
  new Editora(3, "Addison Wesley"),
];

export class ControleEditora {
  static getEditoras(): Array<Editora> {
    return editoras;
  }

  static getNomeEditora(codEditora: number): string {
    const editora = editoras.filter((editora) => editora.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : "Editora não encontrada";
  }
}
