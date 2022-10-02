import React from "react";
import { RiCloseLine } from "react-icons/ri";

import dialogStyles from "../../../css/modules/Dialog.module.css";

import Button from "../../atoms/Button";

type State = {};

type Props = {
  title: string;
  close: Function;
  content: any;
  actions?: any;
};

export default class CreateExpense extends React.Component<Props, State> {
  render() {
    return (
      <>
        <div
          className={dialogStyles.outside}
          onClick={() => this.props.close()}
        />
        <div className={dialogStyles.centered}>
          <div className={dialogStyles.modal}>
            <div className={dialogStyles.header}>
              <h5 className={dialogStyles.header_tittle}>{this.props.title}</h5>
            </div>
            <div className={dialogStyles.close}>
              <Button
                icon={<RiCloseLine />}
                handler={() => this.props.close()}
              ></Button>
            </div>

            <div className={dialogStyles.content}>{this.props.content}</div>
            <div className={dialogStyles.actions}>
              <div className={dialogStyles.actions_container}>{this.props.actions}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
