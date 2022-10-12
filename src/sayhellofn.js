

const Sayhellofn=(props) =>{   // it will work fine if we dont pass props.
    console.log("props is= ",props);
    var name=null;
    //props.test="hello again";
    const handleClick=()=> {
        name="amit"
        alert(name);
    }
    return (
        <button onClick={handleClick}>
            click
        </button>
    );
};
export default Sayhellofn