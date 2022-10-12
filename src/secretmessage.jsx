import { useState } from 'react'
export const ToggleMsgFun = () => {
    var flag;
    const [showSecret, setSecret] = useState(true);

    const secretMessage = () => {
        return (
            <div className="secret-message">
                I am the secret message!
            </div>
        )

    }

    const toggleSecretMessage = () => {
        setSecret(!showSecret);

    };

    const toggleFlag = () => {
        console.log("Flag is", flag);
        flag = !flag;
        console.log("Flag is", flag);
    }
    return (
        <div >
            { <button onClick={toggleSecretMessage}>
                Click to show the secret message using state!
                </button>}
            <button onClick={toggleFlag}>
                Click to show the secret message!
                </button>
            { showSecret ? secretMessage() : null}
            { flag ? this.secretMessage() : null}
        </div>
    );

}