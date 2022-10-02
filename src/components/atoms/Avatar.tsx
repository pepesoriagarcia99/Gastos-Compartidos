import React from "react";
import styles from "../../css/components/Avatar.module.css";

import User from "../../models/User";

type Props = {
  user: User;
  userDetail?: Function;
};

export default class Avatar extends React.Component<Props> {
  render() {
    const user = this.props.user;

    return (
      <div
        className={styles.detail}
        onClick={() => {
          this.props.userDetail && this.props.userDetail(true);
        }}
      >
        <img className={styles.avatar_img} src={user.avatar} alt={user.name} />
      </div>
    );
  }
}
