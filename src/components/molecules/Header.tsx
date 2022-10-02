import React from "react";

import "../../css/components/header.css";

import Avatar from "../atoms/Avatar";
import User from "../../models/User";

type Props = {
  user: User;
};

export default class Header extends React.Component<Props> {
  user: User;

  constructor(props: Props) {
    super(props);

    this.user = props.user;
  }

  render() {
    return (
      <div className="header">
        <div className="horizontal_list">
          <h2 className="title">Gastos Compartidos</h2>
          <Avatar user={this.user}></Avatar>
        </div>
      </div>
    );
  }
}
