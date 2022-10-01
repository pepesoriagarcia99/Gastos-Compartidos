import React from "react";
import Expanse from '../../interfaces/Expense.interface'

type Props = {
  expanse: Expanse;
};

export default function ExpensesItem({ expanse }: Props) {
  return (
    <li>{expanse.description}</li>
  );
}