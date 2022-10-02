import { uuid } from "../utils/Tools";
import User from "./User";

export default class Expense {
  id: string;
  creator: User;
  description: string;
  date: Date;
  amount: number;
  friends: Array<User>;

  constructor(
    creator: User,
    description: string,
    amount: number,
    friends: Array<User>
  ) {
    this.id = uuid();
    this.creator = creator;
    this.description = description;
    this.date = new Date();
    this.amount = amount;
    this.friends = friends;
  }
}
