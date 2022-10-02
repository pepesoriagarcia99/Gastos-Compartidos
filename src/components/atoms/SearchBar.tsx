import React from "react";
import { RiSearchLine } from "react-icons/ri";

import styles from "../../css/components/SearchBar.module.css";

import Button from "./Button";

type State = {
  value: string;
};

type Props = {
  handler: Function;
};

export default class SearchBar extends React.Component<Props, State> {
  state: State = {
    value: "",
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <div className={styles.search_bar}>
        <input
          className={styles.input}
          name="value"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.icon}>
          <Button
            icon={<RiSearchLine />}
            handler={() => this.props.handler(this.state.value)}
          ></Button>
        </div>
      </div>
    );
  }
}
