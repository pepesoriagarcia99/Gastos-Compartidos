import React from "react";

import Expanse from "../../interfaces/Expense.interface"
import ExpanseItem from '../molecules/ExpensesItem'

type Props = {
  expanses: Array<Expanse>;
};

export default function ExpensesList({ expanses }: Props) {
  const listItems = expanses.map((exp, i) => <ExpanseItem key={i} expanse={exp} />);

  return (
    <ul>{listItems}</ul>
  );
}
