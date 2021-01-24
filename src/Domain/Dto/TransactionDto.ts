import { UserDto } from "./UserDto";

export class TransactionDto {
  public uuid: string;
  public user: UserDto;
  public amount: number;
  public date: Date;
  public title: string;
}
