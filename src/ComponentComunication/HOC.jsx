import React, { useState } from 'react';

function ItemsListArray() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");

    const addItem = event => {
        /*It demonstrates how to add an item to a list by using a form element
         with input and button elements. In this case, a preventDefault is called
          on the event when submitting the form to prevent a browser reload/refresh.*/
        event.preventDefault();
        setItems([
            ...items,
            {
                id: items.length,
                name: itemName
            }
        ]);
        setItemName("");
    };

    return (
        <>
            <form onSubmit={addItem}>
                <label>
                    <input
                        name="item"
                        type="text"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}
                    />
                </label>

                <input

                    type="submit"

                />

            </form>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
}
export default ItemsListArray;