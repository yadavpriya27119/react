import React from 'react'
export default class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.name = null;
        console.log("Name is",this.name);
        // This line is important!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.name = "amit"
        console.log("Name is", this.name);
    }

    render() {
        // Because `this.handleClick` is bound, we can use it as an event handler.
        return (
            <button onClick={this.handleClick}>   {/* onclick - html,onClick - react */}
                click
            </button>
        );
    }
}