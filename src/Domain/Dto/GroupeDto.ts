import { TransactionDto } from "./TransactionDto";
import { UserDto } from "./UserDto";

export class GroupeDto {
  public uuid: string;
  public name: string;
  public listUser: Array<UserDto>;
  public listTransaction: Array<TransactionDto>;
  public totalAmount: number;
}
