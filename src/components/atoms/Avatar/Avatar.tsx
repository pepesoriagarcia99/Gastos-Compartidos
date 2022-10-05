import React from "react";
import styles from "./Avatar.module.css";
import { AvatarSize } from "../../../interfaces/Avatar.interface";

import User from "../../../models/User";

type Props = {
  user: User;
  userDetail?: Function;
  size: AvatarSize;
};

export default class Avatar extends React.Component<Props> {
  render() {
    const user = this.props.user;

    return (
      <div
        id="avatar"
        className={styles.detail}
        onClick={() => {
          this.props.userDetail && this.props.userDetail(true);
        }}
      >
        <img
          className={styles[this.props.size]}
          src={user.avatar}
          alt={user.name}
        />
      </div>
    );
  }
}
