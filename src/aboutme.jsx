const AboutMe=(props)=>{
    console.log("props is=",props);
    var name=null;
    //props.test="hello again";
    const handleClick = () =>{
        name="priya"
        alert(name);

    }
    
    return (
        <button onClick={handleClick}>
            click
        </button>
    );
};
export default AboutMe