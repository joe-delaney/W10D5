import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    return <h1>{`${this.state.hours}:${this.state.minutes}:${this.state.seconds}`}</h1>;
  }

  tick() {
    let date = new Date();
    this.setState ({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    });
  }

  componentDidMount () {
    this.id = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.id);
    this.id = 0;
  }

  

}
