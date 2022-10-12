export const CondRenderingfn =() => {
  var showMessage=true;
  console.log("showMessage is= ",showMessage);
  const toggleshowMessage = () => {
      showMessage=!showMessage
      console.log("showMessage is ",showMessage);
  }  
  return(
      <div>
      <button onClick={toggleshowMessage}>Toggle Message</button>
      {showMessage && <p> I m conditionally Rendered</p>}
      </div>
  );
}
export default CondRenderingfn;