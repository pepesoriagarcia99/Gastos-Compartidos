import Expense from "../models/Expense";
import User from "../models/User";

export type ExpenseServiceType = {
  getExpenses(userId: string): Promise<Array<Expense>>;
};

export default class ExpenseService {
  currentUser: User;
  user1: User;
  user2: User;

  constructor(currentUser: User, user1: User, user2: User) {
    this.currentUser = currentUser;
    this.user1 = user1;
    this.user2 = user2;
  }

  async getExpenses(userId: string): Promise<Array<Expense>> {
    return new Promise<Array<Expense>>((resolve, reject) => {
      const expense2 = new Expense(this.user1, "Cena Montellano", 100);
      const expense3 = new Expense(this.user2, "Taxi Sevilla", 10);
      const expense4 = new Expense(this.user2, "Compra Mercadona", 53.40);

      resolve([expense2, expense3, expense4]);
    });
  }
}
