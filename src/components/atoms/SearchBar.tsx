import React from "react";
import { RiSearchLine } from "react-icons/ri";

import styles from "../../css/components/SearchBar.module.css";

import Button from "./Button";

type State = {
  value: string;
};

type Props = {
  searchAction: Function;
};

export default class SearchBar extends React.Component<Props, State> {
  state: State = {
    value: "",
  };

  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ value });

    this.search(value);
  }

  search(value: string) {
    this.props.searchAction(value);
  }

  render() {
    return (
      <div className={styles.search_bar}>
        <input
          className={styles.input}
          placeholder="Search..."
          name="value"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.icon}>
          <Button
            icon={<RiSearchLine />}
            handler={() => this.search(this.state.value)}
          ></Button>
        </div>
      </div>
    );
  }
}
