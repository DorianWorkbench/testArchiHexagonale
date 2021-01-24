import { Transaction } from "./Transaction";
import { User } from "./User";

export class Groupe {
  private uuid: string;
  private listUser: Array<User>;
  private listTransaction: Array<Transaction>;
  private refunderList: Array<Refunder>;
  private name: string;
  private totalAmount: number;

  constructor(
    listUser: Array<User>,
    listTransaction: Array<Transaction>,
    name: string,
    totalAmount: number
  ) {
    this.listUser = listUser;
    this.listTransaction = listTransaction;
    this.name = name;
    this.totalAmount = totalAmount;
  }

  get getListUser(): Array<User> {
    return this.listUser;
  }
  set setListUser(listUser: Array<User>) {
    this.listUser = listUser;
  }

  get getListTransaction(): Array<Transaction> {
    return this.listTransaction;
  }
  set setListTransaction(listTransaction: Array<Transaction>) {
    this.listTransaction = listTransaction;
  }

  get getName(): string {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }

  get getTotalAmount(): number {
    return this.totalAmount;
  }
  set setTotalAmount(totalAmount: number) {
    this.totalAmount = totalAmount;
  }

  get getUuid() {
    return this.uuid;
  }
  set setUuid(uuid: string) {
    this.uuid = uuid;
  }
}
