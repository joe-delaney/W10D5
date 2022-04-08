import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const clock = <Clock/>;
  const tabs = <Tabs tabs={[{
    title: 'one',
    content: 'I am the first'
  },
  {
    title: 'two',
    content: 'I am the second'
  },
  {
    title: 'three',
    content: 'I am the third'
  }
]}/>;
  ReactDOM.render(tabs, root);
});

