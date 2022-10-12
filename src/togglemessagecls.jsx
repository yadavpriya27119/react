import React from 'react';
export default class ToggleMsgCls extends React.Component {
    constructor(props) {
        super(props);
        this.flag = false;
        this.state = {
            showSecret: false
        };
    }
    secretMessage() {
        return (
            <div className="secret-message">
                I am the secret message !
            </div>
        )

    }
    toggleSecretMessage() {
        this.setState({
            showSecret: !this.state.showSecret
        });
    }
    toggleFlag() {
        console.log("Flag is", this.flag);
        this.flag = !this.flag;
        console.log("Flag is", this.flag);
    }
    render() {
        return (
            <div >
                {<button onClick={this.toggleSecretMessage.bind(this)}>
                    Click to show the secret message using state!
                </button>}
                <button onClick={this.toggleFlag.bind(this)}>
                    Click to show the secret message using flag!
                </button>
                {this.state.showSecret ? this.secretMessage() : null}
                <h1> Flag Says:{this.flag ? this.secretMessage() : null}</h1>
            </div>
        );
    }
}