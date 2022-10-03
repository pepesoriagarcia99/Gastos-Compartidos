import React from "react";

import styles from "../../css/components/Expenses.module.css";
import { AvatarSize } from "../../interfaces/Avatar.interface";

import Expanse from "../../models/Expense";
import User from "../../models/User";
import Avatar from "../atoms/Avatar";

import moment from "moment";

type Props = {
  user: User;
  expense: Expanse;
};

export default class ExpensesList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.getDate = this.getDate.bind(this);
  }

  getDate(date: Date): string {
    let result = "";
    const current = moment(new Date());
    const expenseDate = moment(date);

    const diffDays = current.diff(expenseDate, "days");
    if (diffDays <= 0) {
      const diffHours = current.diff(expenseDate, "hours");
      if (diffHours <= 0) {
        const diffMinutes = current.diff(expenseDate, "minute");
        if (diffMinutes <= 0) {
          const diffSecond = current.diff(expenseDate, "second");
          result = `${diffSecond} seconds ago`;
        } else {
          result = `${diffMinutes} minutes ago`;
        }
      } else {
        result = `${diffHours} hours ago`;
      }
    } else {
      result = expenseDate.format("DD/MM/YYYY");
    }

    return result;
  }

  render() {
    const expense = this.props.expense;
    return (
      <article className={styles.item}>
        <Avatar user={expense.creator} size={AvatarSize.xs}></Avatar>
        <span>
          <span className={styles.item_name}>{expense.description}</span>
          <br></br>
          {this.props.user !== expense.creator && (
            <span className={styles.item_sub_text}>{expense.creator.name}</span>
          )}
        </span>
        <span>
          <span className={styles.item_amount}>{expense.amount} €</span>
          <br></br>
          <span className={styles.item_sub_text}>
            {this.getDate(expense.date)}
          </span>
        </span>
      </article>
    );
  }
}
