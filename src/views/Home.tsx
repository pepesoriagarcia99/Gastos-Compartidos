import React from "react";
import { RiAddFill } from "react-icons/ri";

import styles from "../css/views/Home.module.css";

/** Models */
import User from "../models/User";
import Expense from "../models/Expense";

/** components */
import Header from "../components/molecules/Header";
import ExpensesList from "../components/organisms/ExpensesList";
import CreateExpense from "../components/molecules/dialogs/CreateExpense";
import UserDetail from "../components/molecules/dialogs/UserDetail";
import Button from "../components/atoms/Button";
import SearchBar from "../components/atoms/SearchBar";
import ExpenseDetail from "../components/molecules/dialogs/ExpenseDetail";
import { ButtonType } from "../interfaces/Button.interface";

/** Mocks */
const user = new User("Jose Eduardo");
const pedro = new User("Pedro Fernandez");
const cristina = new User("Cristina Alvarez");
const juan = new User("Juan Carlos");

user.addFriend(pedro);
user.addFriend(cristina);
user.addFriend(juan);

const expense1 = new Expense(pedro, "Cafe", 3.5);
const expense2 = new Expense(user, "Cena", 13.2);

type State = {
  createExpenseIsActive: boolean;
  userDetailIsActive: boolean;
  ExpenseDetailIsActive: boolean;

  expenses: Array<Expense>;
  selectedExpense?: Expense;
  filteredExpenses: Array<Expense>;
};

export default class Home extends React.Component<{}, State> {
  user: User;

  state: State = {
    createExpenseIsActive: false,
    userDetailIsActive: false,
    ExpenseDetailIsActive: false,

    expenses: [expense1, expense2],
    selectedExpense: undefined,
    filteredExpenses: [],
  };

  constructor(props: {}) {
    super(props);

    this.user = user;

    this.changeStateCreateExpense = this.changeStateCreateExpense.bind(this);
    this.changeStateUserDetail = this.changeStateUserDetail.bind(this);
    this.changeStateExpenseDetail = this.changeStateExpenseDetail.bind(this);

    this.createNewExpense = this.createNewExpense.bind(this);
    this.search = this.search.bind(this);
  }

  changeStateCreateExpense(state: boolean = false): void {
    this.setState({ createExpenseIsActive: state });
  }

  changeStateUserDetail(state: boolean = false): void {
    this.setState({ userDetailIsActive: state });
  }

  changeStateExpenseDetail(state: boolean = false, expense?: Expense): void {
    this.setState({ ExpenseDetailIsActive: state, selectedExpense: expense });
  }

  createNewExpense(description: string, amount: number): void {
    const newExpense = new Expense(this.user, description, amount);
    const current = this.state.expenses;

    current.push(newExpense);

    this.setState({ expenses: current });
  }

  search(value: string): void {
    if (value) {
      const filteredExpenses = this.state.expenses
        .slice()
        .filter((exp) =>
          exp.description.toLowerCase().includes(value.toLowerCase())
        );
      this.setState({ filteredExpenses });
    } else {
      this.setState({ filteredExpenses: [] });
    }
  }

  render() {
    const auxExpenses =
      this.state.filteredExpenses.length > 0
        ? this.state.filteredExpenses
        : this.state.expenses;

    const expenses = auxExpenses
      .slice()
      .sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
      <div>
        <Header
          user={this.user}
          userDetail={this.changeStateUserDetail}
        ></Header>
        <div className={styles.container}>
          <SearchBar searchAction={this.search}></SearchBar>
        </div>
        <div className={styles.container}>
          <ExpensesList
            user={this.user}
            expenses={expenses}
            detail={this.changeStateExpenseDetail}
          ></ExpensesList>
        </div>

        <div className={styles.btn_flotante}>
          <Button
            icon={<RiAddFill style={{ marginBottom: "-3px" }} />}
            type={ButtonType.Primary}
            handler={() => this.changeStateCreateExpense(true)}
          ></Button>
        </div>

        {this.state.createExpenseIsActive && (
          <CreateExpense
            friends={this.user.friends}
            close={() => this.changeStateCreateExpense(false)}
            submit={this.createNewExpense}
          ></CreateExpense>
        )}

        {this.state.userDetailIsActive && (
          <UserDetail
            user={this.user}
            close={() => this.changeStateUserDetail(false)}
          ></UserDetail>
        )}

        {this.state.ExpenseDetailIsActive && (
          <ExpenseDetail
            expense={this.state.selectedExpense}
            handler={this.changeStateExpenseDetail}
          ></ExpenseDetail>
        )}
      </div>
    );
  }
}
