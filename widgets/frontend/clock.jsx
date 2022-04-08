import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      date: date.toString().split(" ").slice(0, 4).join(" "),
      time: `${date.toString().split(" ")[4]} EST`
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    return < >
        <h1 className="clock-title">Clock</h1>
          <div className="clock">
            <div className="date-labels">
              <h1>Time: </h1>
              <h1>Date: </h1>
            </div>
            <div className="date-values">
              <h1>{this.state.time}</h1>
              <h1>{this.state.date}</h1>
            </div>
        </div>
          </>
  }

  tick() {
    let date = new Date();
    this.setState ({
      date: date.toString().split(" ").slice(0, 4).join(" "),
      time: `${date.toString().split(" ")[4]} EST`
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
