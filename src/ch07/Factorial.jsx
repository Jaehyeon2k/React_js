import { useMemo } from "react";

function Factorial(props){
    function factorial(n) {
        console.log('factorial 함수 실행됨');
        if(n <= 0) return 1;
        for(let i = n-1; i >= 2; i--){
            n *= i;
        }
        return n;
    }
    
    const result = useMemo(()=> factorial(props.n),[props.n]);
    return (
        <>
            <h3>{`${props.n} Factorial`}</h3>
            <h4>{result}</h4>
            <h4>{props.isPolite?'이다':'입니다'}</h4>
        </>
    )
}
export default Factorial;