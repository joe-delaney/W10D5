import React from "react";
import Header from "./header";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }

    this.updateSelected = this.updateSelected.bind(this);

  }

  render() {
    return <><h1>Tabs</h1>
    <ul>
      {this.props.tabs.map((tab, i) => {
        return <Header key={`${tab.title}${i}`} title={tab.title} content={tab.content} updateSelected= {this.updateSelected} idx = {i}/>
      })}
    </ul>
    <article>{this.props.tabs[this.state.selected].content}</article>
  </>
  }

  updateSelected(idx) {
    this.setState({selected:idx})
  }
}