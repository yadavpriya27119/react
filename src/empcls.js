import React from "react";
export default class Employee extends React.Component {
    constructor(props){
    super(props)
    }
    render() {
        return(
            <div>
        <h1>emp id:{this.props.id}</h1>
          <h1>emp name:{this.props.name}</h1>
          <h1>emp designation:{this.props.desg}</h1>
          <h1>emp salary:{this.props.salary}</h1>
          
          </div>
        );
    }
}