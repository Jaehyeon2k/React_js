import { useState } from "react"
import Counter from "./Counter"

function CounterContainer() {
    const [isShow, setisShow] = useState(false);
    return (
    <div>
        <button onClick={()=>{setisShow(!isShow)}}>{isShow?"숨기기":"보이기"}</button>
        {isShow && <Counter/>}
    </div>
    )
}

export default CounterContainer;