import React from 'react'
export default class CondRenderingCls extends React.Component {
    render() {
        const showMessage =true;//null , !showMessage
        return (
            <div>
                { showMessage && <p>I M Conditionally Rendered</p>}
                
            </div>
        );
    }

}