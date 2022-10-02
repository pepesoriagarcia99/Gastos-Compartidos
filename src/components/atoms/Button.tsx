import React from "react";
import styles from "../../css/modules/Button.module.css";

// import {
//   RiCloseLine,
//   RiAddFill,
//   RiDeleteBin6Line,
//   RiQuestionLine,
// } from "react-icons/ri";

type Props = {
  text?: string;
  icon?: any;
  type?: string;
  handle: Function;
};


export default class Button extends React.Component<Props, {}> {
  render() {
    const type = this.props.type;
    const text = this.props.text;
    const icon = this.props.icon;

    return (
      <button
        className={`${type ? styles[type] : ""}`}
        onClick={() => this.props.handle()}
      >
        {text ? text : icon}
      </button>
    );
  }
}
