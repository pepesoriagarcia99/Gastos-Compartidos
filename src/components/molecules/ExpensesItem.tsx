import React from "react";
import Expanse from '../../models/Expense'

type Props = {
  expanse: Expanse;
};

export default function ExpensesItem({ expanse }: Props) {
  return (
    <li>{expanse.description}</li>
  );
}