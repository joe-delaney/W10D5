import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tabs from "./tabs";
import Weather from "./weather";
import Autocomplete from "./autocomplete";

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

  const weather = <Weather/>

  const auto = <Autocomplete names={["Anthony", "Bella", "Chris", "Dan", "James", "Joe", "Sasha", "Steve"]}/>

  const widgets = <div className="widgets">{clock} {tabs} {weather} {auto}</div>


  ReactDOM.render(widgets, root);
});

