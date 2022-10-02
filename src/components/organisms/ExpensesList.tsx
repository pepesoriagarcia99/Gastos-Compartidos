import React from "react";

import styles from "../../css/components/Expenses.module.css";

import Expanse from "../../models/Expense";
import User from "../../models/User";
import ExpanseItem from "../molecules/ExpensesItem";

type Props = {
  user: User;
  expenses: Array<Expanse>;
  detail: Function;
};

export default class ExpensesList extends React.Component<Props> {
  render() {
    return (
      <div className={styles.list}>
        {this.props.expenses.map((exp) => (
          <div onClick={() => this.props.detail(true, exp)}>
            <ExpanseItem key={exp.id} user={this.props.user} expense={exp} />
          </div>
        ))}
      </div>
    );
  }
}
