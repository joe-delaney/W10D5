import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.tabSelected = this.tabSelected.bind(this);
  }

  render() {
    return <h1 onClick = {this.tabSelected} >{this.props.title}</h1>
  };

  tabSelected() {
    this.props.updateSelected(this.props.idx);
  }
}

