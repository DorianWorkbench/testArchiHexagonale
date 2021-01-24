import { Groupe } from "../Entity/Groupe";

export interface IGroupe {
  findAllGroupe(): Array<Groupe>;
  saveGroupe(groupe: Groupe): void;
}
