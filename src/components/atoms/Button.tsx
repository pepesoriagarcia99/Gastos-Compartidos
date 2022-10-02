import React from "react";
import styles from "../../css/modules/Button.module.css";

import { ButtonType } from "../../interfaces/Button.interface";


type Props = {
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
        className={`${type ? styles[type] : ""}`}
        onClick={() => this.props.handler()}
      >
        {text ? text : icon}
      </button>
    );
  }
}
