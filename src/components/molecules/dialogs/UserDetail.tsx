import React from "react";

import GenericDialog from "../../molecules/dialogs/GenericDialog";

type State = {};

type Props = {
  close: Function;
};

export default class UserDetail extends React.Component<Props, State> {
  render() {
    return (
      <GenericDialog
        title="Detalle usuario"
        close={this.props.close}
        content={
          <div>pepe</div>
        }
      ></GenericDialog>
    );
  }
}
