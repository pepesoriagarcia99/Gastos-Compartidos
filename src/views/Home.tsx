import React from "react";
import { RiAddFill } from "react-icons/ri";

import styles from "../css/views/Home.module.css";

/** Models */
import User from "../models/User";
import Expense from "../models/Expense";
import { ButtonType } from "../interfaces/Button.interface";

/** Services */
import ExpenseService, {
  ExpenseServiceType,
} from "../services/Expenses.service";

/** components */
import Header from "../components/molecules/Header";
import ExpensesList from "../components/organisms/ExpensesList";
import CreateExpense from "../components/molecules/dialogs/CreateExpense";
import UserDetail from "../components/molecules/dialogs/UserDetail";
import Button from "../components/atoms/Button";
import SearchBar from "../components/atoms/SearchBar";

/** Mocks */
const user = new User("Jose Eduardo");
const pedro = new User("Pedro Fernandez");
const cristina = new User("Cristina Alvarez");
const juan = new User("Juan Carlos");

user.addFriend(pedro);
user.addFriend(cristina);
user.addFriend(juan);

type State = {
  createExpenseIsActive: boolean;
  userDetailIsActive: boolean;

  searchValue?: string;
  expenses: Array<Expense>;
  selectedExpense?: Expense;
  filteredExpenses: Array<Expense>;
};

export default class Home extends React.Component<{}, State> {
  state: State = {
    createExpenseIsActive: false,
    userDetailIsActive: false,

    searchValue: undefined,
    expenses: [],
    selectedExpense: undefined,
    filteredExpenses: [],
  };

  user: User;
  expensesService: ExpenseServiceType = new ExpenseService(
    user,
    pedro,
    cristina
  );

  constructor(props: {}) {
    super(props);

    this.user = user;

    this.changeStateCreateExpense = this.changeStateCreateExpense.bind(this);
    this.changeStateUserDetail = this.changeStateUserDetail.bind(this);

    this.createNewExpense = this.createNewExpense.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.expensesService
      .getExpenses(this.user.id)
      .then((response) => {
        this.setState({ expenses: response });
      })
      .catch(console.error);
  }

  changeStateCreateExpense(state: boolean = false): void {
    this.setState({ createExpenseIsActive: state });
  }

  changeStateUserDetail(state: boolean = false): void {
    this.setState({ userDetailIsActive: state });
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
      this.setState({ filteredExpenses, searchValue: value });
    } else {
      this.setState({ filteredExpenses: [], searchValue: undefined });
    }
  }

  render() {
    const auxExpenses =
      this.state.filteredExpenses.length > 0 || this.state.searchValue
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
          {expenses.length > 0 ? (
            <ExpensesList user={this.user} expenses={expenses}></ExpensesList>
          ) : (
            <span>You still have no expenses</span>
          )}
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
      </div>
    );
  }
}
