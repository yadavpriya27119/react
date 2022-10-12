import React, { useState, useEffect } from 'react';

export function UseEfectcount() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `count1 ${count1} and count2 ${count2} times`;

        //this function re-renders component infinite times as it changes state variable
        //setTimeout(() => setCount(count + 1), 3000)
    });

    return (

        <div>
            <p>You clicked count1 {count1} times</p>
            <p>You clicked count2 {count2} times</p>
            <button onClick={() => setCount1(count1 + 1)}>
                Change Count1
            </button>
            <button onClick={() => setCount2(count2 + 1)}>
                Change Count2
            </button>

        </div>
    );
}
export default UseEfectcount;