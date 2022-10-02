import React from "react";

import styles from "../../css/components/Header.module.css";

import Avatar from "../atoms/Avatar";
import User from "../../models/User";

type Props = {
  user: User;
  userDetail: Function;
};

export default class Header extends React.Component<Props> {
  user: User;

  constructor(props: Props) {
    super(props);

    this.user = props.user;
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <h2 className={styles.title}>Gastos Compartidos</h2>
            <Avatar user={this.user} userDetail={this.props.userDetail}></Avatar>
        </div>
      </div>
    );
  }
}
