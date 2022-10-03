import React from "react";

import { RiAddFill, RiDeleteBinFill } from "react-icons/ri";

import style from "../../../css/components/UserDetail.module.css";

import User from "../../../models/User";
import Expense from "../../../models/Expense";
import { AvatarSize } from "../../../interfaces/Avatar.interface";
import { ButtonType } from "../../../interfaces/Button.interface";

import GenericDialog from "../../molecules/dialogs/GenericDialog";
import Avatar from "../../atoms/Avatar";
import Button from "../../atoms/Button";

type State = {
  friends: Array<User>;
  nameNewFriend: string;
  personDebt: number;
  // yourBalance: number;
};

type Props = {
  user: User;
  expenses: Array<Expense>;
  close: Function;
};

export default class UserDetail extends React.Component<Props, State> {
  state: State = {
    friends: this.props.user.friends,
    nameNewFriend: "",
    personDebt: 0,
    // yourBalance: 0,
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
    this.calculatePersonDebt = this.calculatePersonDebt.bind(this);
  }

  componentDidMount() {
    this.calculatePersonDebt();
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ nameNewFriend: event.target.value });
  }

  addFriend() {
    const newFriend = new User(this.state.nameNewFriend);
    this.props.user.addFriend(newFriend);

    this.setState({ nameNewFriend: "" });

    this.calculatePersonDebt();
  }

  deleteFriend(id: string) {
    this.props.user.deleteFriend(id);
    this.setState({ friends: this.props.user.friends });

    this.calculatePersonDebt();
  }

  calculatePersonDebt(){
    let total = 0;
    this.props.expenses.forEach((exp) => (total += Number(exp.amount)));
    const personDebt = total / (this.props.user.friends.length + 1);

    this.setState({ personDebt });
  }

  getBalance(user: User): number {
    const userExpenses = this.props.expenses
      .slice()
      .filter((e) => e.creator === user);

    let userAmount: number = 0;
    if (userExpenses.length > 0) {
      userExpenses.forEach((e) => (userAmount += e.amount));
    }

    const value: number = userAmount - this.state.personDebt;
    return +value.toFixed(2);
  }

  render() {
    return (
      <GenericDialog
        title="User detail"
        close={this.props.close}
        content={
          <div className={style.container}>
            <Avatar user={this.props.user} size={AvatarSize.lg}></Avatar>
            {this.props.user.name}
            <hr></hr>
            {<span>Your balance {this.getBalance(this.props.user)} €</span>}

            <div className={style.friends}>
              <div className={style.active}>Friends</div>
              {this.props.user.friends.map((friend) => (
                <div>
                  {friend.name}

                  <span>{this.getBalance(friend)} €</span>

                  <Button
                    icon={<RiDeleteBinFill style={{ marginBottom: "-3px" }} />}
                    type={ButtonType.Danger}
                    handler={() => this.deleteFriend(friend.id)}
                  ></Button>
                </div>
              ))}

              <form onSubmit={(event) => event.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  name="nameNewFriend"
                  value={this.state.nameNewFriend}
                  onChange={this.handleChange}
                />
                <Button
                  icon={<RiAddFill style={{ marginBottom: "-3px" }} />}
                  type={ButtonType.Primary}
                  handler={() => this.addFriend()}
                  disabled={!this.state.nameNewFriend}
                ></Button>
              </form>
            </div>
          </div>
        }
      ></GenericDialog>
    );
  }
}
