import { Calendar, Alert } from "antd";
import moment from "moment";
import React from "react";

export default class CalenderHome extends React.Component {
  state = {
    value: moment("2021-01-25"),
    selectedValue: moment("2021-01-25"),
  };

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert
          message={`You selected date: ${
            selectedValue && selectedValue.format("YYYY-MM-DD")
          }`}
        />
        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
      </>
    );
  }
}
