import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const clock = <Clock/>;
  ReactDOM.render(clock, root);
});