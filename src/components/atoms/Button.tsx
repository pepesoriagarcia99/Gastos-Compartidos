import React from "react";
import styles from "../../css/modules/Button.module.css";

import { ButtonType } from "../../interfaces/Button.interface";

type Props = {
  disabled?: boolean;
  text?: string;
  icon?: any;
  type?: ButtonType;
  handler: Function;
};

export default class Button extends React.Component<Props, {}> {
  render() {
    const type = this.props.type;
    const text = this.props.text;
    const icon = this.props.icon;

    return (
      <button
        disabled={this.props.disabled || false}
        className={`${type ? styles[type] : ""}${icon ? " " + styles.icon : ""}`}
        onClick={() => this.props.handler()}
      >
        {text ? text : icon}
      </button>
    );
  }
}
