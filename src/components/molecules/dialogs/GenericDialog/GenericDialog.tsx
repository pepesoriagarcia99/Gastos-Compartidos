import React from "react";
import { RiCloseLine } from "react-icons/ri";

import dialogStyles from "./GenericDialog.module.css";

import Button from "../../../atoms/Button/Button";

type State = {};

type Props = {
  title: string;
  close: Function;
  content: any;
  actions?: Array<any>;
};

export default class GenericDialog extends React.Component<Props, State> {
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
              <div className={dialogStyles.close}>
                <Button
                  icon={<RiCloseLine style={{ marginBottom: "-3px" }} />}
                  handler={() => this.props.close()}
                ></Button>
              </div>
            </div>

            <div className={dialogStyles.content}>{this.props.content}</div>
            <div className={dialogStyles.actions}>
              <div className={dialogStyles.actions_container}>
                {this.props.actions && this.props.actions.map((e) => e)}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
