import React from "react";



/** Models */
import User from "../models/User";
import Expense from "../models/Expense";

/** components */
import Header from "../components/molecules/Header";
import ExpensesList from "../components/organisms/ExpensesList";
import CreateExpense from "../components/molecules/dialogs/CreateExpense";


const user = new User("Jose Eduardo");
const pedro = new User("Pedro Fernandez")
const cristina = new User("Cristina Alvarez")
const juan = new User("Juan Carlos")

user.addFriend(pedro);
user.addFriend(cristina);
user.addFriend(juan);


const expense1 = new Expense(pedro, "Cafe", 3.5, [user]);
const expense2 = new Expense(user, "Cena", 3.5, [pedro, cristina]);


type State = {
  createExpenseIsActive: boolean;
  expenses: Array<Expense>;
};

export default class Home extends React.Component<{}, State> {
  user: User;

  state: State = {
    createExpenseIsActive: false,

    // mis gastos son gastos creados por mi y gastos creados con mis amigos en los que aparezco
    expenses: [expense1, expense2],
  };

  constructor(props: {}) {
    super(props);

    this.user = user;

    this.changeStateCreateExpense = this.changeStateCreateExpense.bind(this);
    this.createNewExpense = this.createNewExpense.bind(this);
  }

  changeStateCreateExpense(state: boolean = false): void {
    this.setState({ createExpenseIsActive: state });
  }

  createNewExpense(
    description: string,
    amount: number,
    friends: Array<User>
  ): void {
    const newExpense = new Expense(this.user, description, amount, friends);
    const current = this.state.expenses;

    current.push(newExpense);

    this.setState({ expenses: current });
  }

  render() {
    const expenses = this.state.expenses
      .slice()
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return (
      <div>
        <Header user={this.user}></Header>
        <div>
          <ExpensesList expenses={expenses}></ExpensesList>
        </div>

        <button onClick={() => this.changeStateCreateExpense(true)}>
          Nuevo gasto
        </button>
        {this.state.createExpenseIsActive && (
          <CreateExpense
            friends={this.user.friends}
            close={() => this.changeStateCreateExpense(false)}
            submit={this.createNewExpense}
          ></CreateExpense>
        )}
      </div>
    );
  }
}
