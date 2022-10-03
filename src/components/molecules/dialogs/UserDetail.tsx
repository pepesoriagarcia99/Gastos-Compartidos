import React from "react";

import { RiAddFill, RiDeleteBinFill } from "react-icons/ri";

import style from "../../../css/components/UserDetail.module.css";

import User from "../../../models/User";
import { AvatarSize } from "../../../interfaces/Avatar.interface";
import { ButtonType } from "../../../interfaces/Button.interface";

import GenericDialog from "../../molecules/dialogs/GenericDialog";
import Avatar from "../../atoms/Avatar";
import Button from "../../atoms/Button";

type State = {
  friends: Array<User>;
  nameNewFriend: string;
};

type Props = {
  user: User;
  close: Function;
};

export default class UserDetail extends React.Component<Props, State> {
  state: State = {
    friends: this.props.user.friends,
    nameNewFriend: "",
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ nameNewFriend: event.target.value });
  }

  addFriend() {
    const newFriend = new User(this.state.nameNewFriend);
    this.props.user.addFriend(newFriend);

    this.setState({ nameNewFriend: "" });
  }

  deleteFriend(id: string) {
    this.props.user.deleteFriend(id);
    this.setState({ friends: this.props.user.friends });
  }

  render() {
    return (
      <GenericDialog
        title="User detail"
        close={this.props.close}
        content={
          <div className={style.container}>
            <Avatar user={this.props.user} size={AvatarSize.lg}></Avatar>

            <div className={style.friends}>
              <div className={style.active}>Friends</div>
              {this.props.user.friends.map((friend) => (
                <div>
                  {friend.name}

                  <span>-5€</span>

                  <Button
                    icon={<RiDeleteBinFill style={{ marginBottom: "-3px" }} />}
                    type={ButtonType.danger}
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
