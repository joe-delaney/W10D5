import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.tabSelected = this.tabSelected.bind(this);
  }

  render() {
    let className;
    // debugger;
    if(this.props.selected === this.props.idx) {
      className = "header active";
    } else {
      className = "header";
    }
    return <span className={className} onClick = {this.tabSelected} >{this.props.title}</span>
  };

  tabSelected() {
    this.props.updateSelected(this.props.idx);
  }
}

