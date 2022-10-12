import React from 'react'
export default class ComponentLC2 extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
        this.state = { cycle: 0 };

    }
    componentDidMount() {
        console.log("Component Did Mount");
        setTimeout(
            () => this.setState({ cycle: this.state.cycle + 1 }),
            1000
        );
    }
    render() {
        console.log('render')
        return (
            <div className="App">Hello Lifecycle</div>
        )
    }
    componentDidUpdate() {
        console.log("Component Did Update");
    }
    // shouldComponentUpdate() {
    //     console.log(" Should Component  Update");
    //     return true;
    // }

}