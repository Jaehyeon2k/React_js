import { useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate() {
    const { count, increment, decrement } = useCounter(0);
    const isFull = count >= MAX_CAPACITY;
    useEffect(() => {
        if(isFull){
            alert("정원이 꽉 찼습니다.");
        }
    }, [isFull]);
    useEffect(() => {
        console.log(`현재 인원: ${count}`);
    }, [count]);
    
    return (
        <div>
            <h2>총 {count}명 수용했습니다.</h2>
            <button onClick={increment} disabled={isFull}>입장</button>
            <button onClick={decrement}>퇴장</button>
        </div>
    );
}

export default Accomodate;
