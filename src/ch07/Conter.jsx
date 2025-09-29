import React, {useEffect, useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Counter 페이지');
    
    // 의존성 배열 생략, useEffect 내부에 정의된 함수는
    // mount될 때, update될 때마다 실행됨
    // useEffect(() => {document.title= `총 ${count}번 클릭.`});
    
    // 의존성 배열을 empty array로 주는 경우
    // mount 될 때 딱 한번만 실행됨.
    // useEffect(() => {document.title= `총 ${count}번 클릭.`}, []);

    useEffect(() => {
                    document.title = title
                    return () => {document.title = 'Counter 사라짐';}
                    }, [title]);
    function handleIncrease(e){
        setCount(count + 1);
        console.log(e.target.name);
        console.log(count);
    }
    function handleDecrease(){
        setCount(count - 1);
    }
    

    // const increase = () => {
    //     setCount(count + 1);
    // }
    // const decrease = () => {
    //     setCount(count - 1);
    // }

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={handleIncrease}>클릭</button>
            <button onClick={handleDecrease}>감소</button>
            <button onClick={() => setTitle(`총 ${count}번 클릭`)}>제목 변경</button>
            {/* <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p> */}
        </div>
    )
}

export default Counter;


