import React from "react";
// import { RiCloseLine } from "react-icons/ri";

// import dialogStyles from "../../../css/modules/Dialog.module.css";
// import formStyles from "../../../css/modules/Form.module.css";
import GenericDialog from "../../molecules/dialogs/GenericDialog";

import User from "../../../models/User";
import Button from "../../atoms/Button";

type State = {
  description: string;
  amount: number;
};

type Props = {
  friends: Array<User>;
  close: Function;
  submit: Function;
};

export default class CreateExpense extends React.Component<Props, State> {
  state: State = {
    description: "",
    amount: 0,
  };

  constructor(props: Props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(
      "🚀 ~ file: CreateExpense.tsx ~ line 32 ~ CreateExpense ~ handleChange ~  event.target",
      event.target
    );

    // const name = event.target.name;
    // const value = event.target.value;
    // console.log("🚀 ~ file: CreateExpense.tsx ~ line 30 ~ CreateExpense ~ handleChange ~ value", value)
    // console.log("🚀 ~ file: CreateExpense.tsx ~ line 29 ~ CreateExpense ~ handleChange ~ name", name)

    // const c: any = {}
    // c[name] = this.state[name] += value
    // this.setState(c);
  }

  handleSubmit() {
    const form = {
      description: this.state.description,
      amount: this.state.amount,
    };
    console.log("An essay was submitted: ", form);

    this.props.submit(form);
  }

  render() {
    return (
      <GenericDialog
        title="Create expense"
        close={this.props.close}
        content={
          <form>
            <label>Description</label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <label>Amount</label>
            <input
              name="amount"
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </form>
        }
        actions={
          <Button
            text="Submit"
            type="primary"
            handler={() => this.handleSubmit()}
          ></Button>
        }
      ></GenericDialog>
    );
  }
}
