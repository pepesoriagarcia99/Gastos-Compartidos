import React from "react";

import formStyle from "../../../../css/modules/Form.module.css";

import { ButtonType } from "../../../../interfaces/Button.interface";
import User from "../../../../models/User";

import GenericDialog from "../GenericDialog/GenericDialog";
import Button from "../../../atoms/Button/Button";

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
            <form onSubmit={(event) => event.preventDefault()}>
              <div className={formStyle.field} style={{ width: "70%" }}>
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Foam party"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div className={formStyle.field} style={{ width: "30%" }}>
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
            key="create"
            text="Create"
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
            key="cancel"
            text="Cancel"
            type={ButtonType.Danger}
            handler={() => this.props.close()}
          ></Button>,
        ]}
      ></GenericDialog>
    );
  }
}
