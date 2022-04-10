import React from "react";
import AutoListItem from "./auto_list_item";

export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            names: this.props.names
        }
        this.updateInputVal = this.updateInputVal.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    render() {
        return <div className="auto">
            <h1>Autocomplete</h1>
            <input type="text" onChange={this.inputChange} value={this.state.inputVal} placeholder="Search..." />
            <ul>
                { this.matches().map((name, idx) => {
                   return <AutoListItem key={`${name}${idx}`} name={name} updateInputVal={this.updateInputVal}/>
                })}
            </ul>
        </div>
    }

    matches() {
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return this.props.names;
        }

        this.props.names.forEach(name => {
            const sub = name.slice(0, this.state.inputVal.length);
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }

        return matches;
    }

    updateInputVal(name) {
        this.setState({
            inputVal: name
        })
    }

    inputChange(e) {
        let query = e.target.value;
        this.setState({
            inputVal: query,
        })
    }
}