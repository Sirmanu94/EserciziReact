import { useState } from "react"
import Welcome from "./Welcome"
import Login from "./Login";
function InteractiveWelcome(){ 
const [name, setName] = useState("");
function handleChange(event){
setName(event.target.value)
}


    return(
        <>
        <h1>Interactive Welcome</h1>
        <input type="text" onChange={handleChange} value={name} placeholder="Enter your name"/>

        <Welcome name={name} />  
        <hr/>
        <Login/>
        <hr/>


        </>
    )
}

export default InteractiveWelcome