import React from "react";
import Expense from "../../../models/Expense";

import GenericDialog from "../../molecules/dialogs/GenericDialog";

type State = {};

type Props = {
  expense?: Expense;
  handler: Function;
};

export default class ExpenseDetail extends React.Component<Props, State> {
  render() {
    return (
      <GenericDialog
        title={this.props.expense ? this.props.expense.description : ''}
        close={this.props.handler}
        content={
          <div>pepe</div>
        }
      ></GenericDialog>
    );
  }
}
