import React from "react";

 
const Button = (props) => {
    return <button onClick={props.callApi} style={{background:"black" , textAlign:"center" , color: "azure"}}>
        Click me for a joke.
    </button>;
}
 
// Export Button Component
export default Button;