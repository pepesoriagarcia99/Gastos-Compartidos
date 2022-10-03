import React from "react";

import style from "../../../css/components/CreateExpenses.module.css";

import { ButtonType } from "../../../interfaces/Button.interface";
import User from "../../../models/User";

import GenericDialog from "../../molecules/dialogs/GenericDialog";
import Button from "../../atoms/Button";

type State = {
  description: string;
  amount?: number;
  formError: boolean;
};

type Props = {
  friends: Array<User>;
  close: Function;
  submit: Function;
};

export default class CreateExpense extends React.Component<Props, State> {
  state: State = {
    description: "",
    amount: undefined,
    formError: false,
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const change: any = {};
    change[event.target.name] = event.target.value;

    this.setState(change);
  }

  handleSubmit() {
    this.props.submit(this.state.description, this.state.amount);

    this.setState({
      description: "",
      amount: undefined,
    });

    this.props.close();
  }

  render() {
    return (
      <GenericDialog
        title="Create expense"
        close={this.props.close}
        content={
          <div>
            <form
              className={style.container}
              onSubmit={(event) => event.preventDefault()}
            >
              <div className={style.field} style={{ width: "70%" }}>
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Foam party"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div className={style.field} style={{ width: "30%" }}>
                <label>Amount</label>
                <input
                  type="number"
                  placeholder="0.00 €"
                  name="amount"
                  value={this.state.amount}
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        }
        actions={[
          <Button
            text="Crear"
            type={ButtonType.Primary}
            handler={() => this.handleSubmit()}
            disabled={
              !this.state.description ||
              this.state.description.length < 8 ||
              !this.state.amount ||
              this.state.amount <= 0 ||
              this.state.formError
            }
          ></Button>,
          <Button
            text="Cancelar"
            type={ButtonType.danger}
            handler={() => this.props.close()}
          ></Button>,
        ]}
      ></GenericDialog>
    );
  }
}
