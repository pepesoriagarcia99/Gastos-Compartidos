import { uuid } from "../utils/Tools";

export default class Expense {
  id: string;
  creator: string;
  description: string;
  date: Date;
  amount: number;
  friends: Array<string>;

  constructor(
    creator: string,
    description: string,
    amount: number,
    friends: Array<string>
  ) {
    this.id = uuid();
    this.creator = creator;
    this.description = description;
    this.date = new Date();
    this.amount = amount;
    this.friends = friends;
  }
}
