import { Transaction } from "../Entity/Transaction";
import { User } from "../Entity/User";

export interface ITransaction {
  addTransaction(transaction: Transaction);
  cancelTransaction(transaction: Transaction);
  findTransaction(transaction: Transaction): Transaction;
  findAllTransactionByUser(user: User): Array<Transaction>;
}
