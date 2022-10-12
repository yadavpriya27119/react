import React from 'react';
export default class CondRenderFunUsingclass extends React.Component {
    renderMessage(show) {
        if (show) {
            return <p>Hello I M Conditionally Rendered</p>;
        } else {
            return null;
        }
    }
    render() {
        const showMessage = true;  
        return (
            <div>
                { this.renderMessage(showMessage)}
            </div>
        );
    }
}