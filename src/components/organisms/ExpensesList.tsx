import React from "react";

import Expanse from "../../models/Expense";
import ExpanseItem from "../molecules/ExpensesItem";

type Props = {
  expenses: Array<Expanse>;
};

export default class ExpensesList extends React.Component<Props> {
  render() {
    return (
      <ul>
        {this.props.expenses.map((exp, i) => (
          <ExpanseItem key={i} expanse={exp} />
        ))}
      </ul>
    );
  }
}
