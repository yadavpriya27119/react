import React from 'react';
export default class ComponentLC1 extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    componentDidMount(){
        console.log("component Did Mount");
    }
    render() {
        console.log('render')
        return(
            <div className="App">Hello Lifecycle</div>
        )
    }
}