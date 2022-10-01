export default interface Expense {
  id: string;
  creator: string;
  description: string;
  date: Date;
  amount: number;
  friends: Array<string>;
}