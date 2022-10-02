import React from "react";
import "../../css/components/avatar.css";

import User from "../../models/User";

type Props = {
  user: User;
};

export default class Avatar extends React.Component<Props> {
  user: User;

  constructor(props: Props) {
    super(props);

    this.user = props.user;
  }

  render() {
    return (
      <img className="Avatar" src={this.user.avatar} alt={this.user.name} />
    );
  }
}
