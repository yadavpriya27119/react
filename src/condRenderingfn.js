//const { CondRenderFunUsingFn } = require("./condRenderfunusingfun");

export const CondRenderingFn =() => {
    
        const showMessage = true;
       
        return (
            <div>
                { showMessage && <p>I M Conditionally Rendered</p>}
            </div>
        );
    
}
export default CondRenderingFn;