import { useState } from "react";
import Factorial from "./Factorial";

function FactorialContainer(props){
    const [n, setN] = useState(10);
    const [isPolite, setispolite] = useState(true);
    return(
        <>
            <button onClick={()=>{setispolite(!isPolite)}}>
                {isPolite?"정중하게":"무뚝뚝하게"}
            </button>
            <label>n:</label>
            <input type="number" value={n} onChange={(e)=>{setN(e.target.value)}} />
            
            <Factorial n={n} isPolite={isPolite}/>

        </>
    )

}

export default FactorialContainer;