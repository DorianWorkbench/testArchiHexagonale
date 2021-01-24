export class User {
  private uuid: string;
  private pseudo: string;
  private name: string;
  private surname: string;

  constructor(pseudo: string, name: string, surname: string) {
    this.pseudo = pseudo;
    this.name = name;
    this.surname = surname;
  }

  get getPseudo(): string {
    return this.pseudo;
  }
  set setPseudo(pseudo: string) {
    this.pseudo = pseudo;
  }
  get getName(): string {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
  get getSurame(): string {
    return this.surname;
  }
  set setSurname(surname: string) {
    this.surname = surname;
  }

  get getUuid(): string {
    return this.uuid;
  }
  set setUuid(uuid: string) {
    this.uuid = uuid;
  }
}
