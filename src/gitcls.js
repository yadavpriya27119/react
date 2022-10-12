import React from "react";
export default class GitComponent extends React.Component {
    constructor(props){
    super(props)
    }
    render() {
        return <h2>I m {this.props.name}</h2>;
    }
}