import React from "react";

import styles from "../../css/components/Expenses.module.css";

import Expanse from "../../models/Expense";
import User from "../../models/User";
import Avatar from "../atoms/Avatar";

type Props = {
  user: User;
  expense: Expanse;
};

export default class ExpensesList extends React.Component<Props> {
  render() {
    const expense = this.props.expense;
    return (
      <article className={styles.item}>
        <Avatar user={expense.creator}></Avatar>
        <span>
          <span className={styles.item_name}>{expense.description}</span>
          <br></br>
          {this.props.user !== expense.creator && (
            <span className={styles.item_creator}>{expense.creator.name}</span>
          )}
        </span>
        <span>
          <span className={styles.item_amount}>{expense.amount} €</span>
        </span>
      </article>
    );
  }
}
