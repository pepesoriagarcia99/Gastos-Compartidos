import React from "react";
import { RiCloseLine } from "react-icons/ri";

import dialogStyles from "../../../css/modules/Dialog.module.css";
import formStyles from "../../../css/modules/Form.module.css";

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

    const name = event.target.name;
    const value = event.target.value;
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

    // event.preventDefault();
  }

  render() {
    return (
      <>
        <div className={dialogStyles.outside} onClick={() => this.props.close()} />
        <div className={dialogStyles.centered}>
          <div className={dialogStyles.modal}>
            <div className={dialogStyles.header}>
              <h5 className={dialogStyles.header_tittle}>Create expense</h5>
            </div>
            <div className={dialogStyles.close}>
              <Button
                icon={<RiCloseLine />}
                handle={() => this.props.close()}
              ></Button>
            </div>

            <div className={dialogStyles.content}>
              {/* onSubmit={this.handleSubmit} */}
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

                {/* <input type="submit" value="Submit" /> */}
              </form>
            </div>
            {/* <div className={styles.modalContent}>
              Are you sure you want to delete the item?
            </div> */}
            <div className={dialogStyles.actions}>
              <div className={dialogStyles.actions_container}>
                <Button
                  text="Submit"
                  type="primary"
                  handle={() => this.handleSubmit()}
                ></Button>
                {/* <button
                  className={styles.deleteBtn}
                  onClick={() => this.props.close()}
                >
                  Cancel
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => this.props.close}
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
