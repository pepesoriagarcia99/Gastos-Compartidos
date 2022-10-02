import React from "react";

import style from "../../../css/components/UserDetail.module.css";

import User from "../../../models/User";

import GenericDialog from "../../molecules/dialogs/GenericDialog";
import Avatar from "../../atoms/Avatar";
import { AvatarSize } from "../../../interfaces/Avatar.interface";
import Button from "../../atoms/Button";
import { ButtonType } from "../../../interfaces/Button.interface";

type State = {
  nameNewFriend: string;
};

type Props = {
  user: User;
  close: Function;
};

export default class UserDetail extends React.Component<Props, State> {
  state: State = {
    nameNewFriend: "",
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ nameNewFriend: event.target.value });
  }

  handleSubmit() {
    const newFriend = new User(this.state.nameNewFriend);
    this.props.user.addFriend(newFriend);

    this.setState({ nameNewFriend: "" });
  }

  render() {
    return (
      <GenericDialog
        title="Detalle usuario"
        close={this.props.close}
        content={
          <div className={style.container}>
            <Avatar user={this.props.user} size={AvatarSize.lg}></Avatar>

            <h4>Amigos</h4>
            <ul>
              {this.props.user.friends.map((friend) => (
                <li>{friend.name}</li>
              ))}
            </ul>

            <form>
              <label>Nombre: </label>
              <input
                name="description"
                type="text"
                value={this.state.nameNewFriend}
                onChange={this.handleChange}
              />
            </form>
            <Button
              text="Nuevo amigo"
              type={ButtonType.Primary}
              handler={() => this.handleSubmit()}
            ></Button>
          </div>
        }
      ></GenericDialog>
    );
  }
}
