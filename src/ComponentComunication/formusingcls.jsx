import React from 'react';
export class FormUsingClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        console.log(event.target);
        this.setState({ value: event.target.value });

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <h1> Hello {this.state.value}</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />

                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}