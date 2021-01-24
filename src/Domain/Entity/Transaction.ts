import { User } from "./User";

export class Transaction {
  private uuid: string;
  private user: User;
  private amount: number;
  private date: Date;
  private title: string;

  constructor(user: User, amount: number, date: Date, title: string) {
    this.user = user;
    this.amount = amount;
    this.date = date;
    this.title = title;
  }

  get getUser(): User {
    return this.user;
  }
  set setUser(user: User) {
    this.user = user;
  }
  get getAmount(): number {
    return this.amount;
  }
  set setAmount(amount: number) {
    this.amount = amount;
  }

  get getDate(): Date {
    return this.date;
  }
  set setDate(date: Date) {
    this.date = date;
  }
  get getTitle(): string {
    return this.title;
  }
  set setTitle(title: string) {
    this.title = title;
  }

  get getUuid(): string {
    return this.uuid;
  }
  set setUuid(uuid: string) {
    this.uuid = uuid;
  }
}
