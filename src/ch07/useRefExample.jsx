import { useState, useRef } from "react";
export default function useRefExample() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    console.log("컴포넌트 랜더링 됨");
    const handleRefClick = () => {
        ref.current.value = Number(ref.current.value) + 1;
        }
    // ref.current 가 가리키는 값을 input 노드 객체의 주소로 설정.
    return (
        <>
            <h2>UseRefExample 컴포넌트: {count}</h2>
            <button onClick={() => setCount(count + 1)}>카운트 증가</button>
            <input ref={ref} value={count} type="text"/>
            <button onClick={handleRefClick}>ref 카운트 증가</button>
        </>
    );
}