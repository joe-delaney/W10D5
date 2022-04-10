import React from "react";

export default class autoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return <li onClick={this.handleClick}>{this.props.name}</li>
    }

    handleClick(e) {
        this.props.updateInputVal(`${e.target.innerText}`);
    }
}