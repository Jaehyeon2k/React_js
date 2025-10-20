import React, { useState,useCallback } from 'react';

const Parent = () => {
    const  [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');
    const handleClick = useCallback(() => {
        console.log('버튼 클릭됨');
    }, []);
    return (    
        <>
            <h3>Parent Component: {count}, 테마: {theme}</h3>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>테마변경</button>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <Child value={count} onClick={handleClick} />
        </>
        );
}
const Child = React.memo(({value}) => {
    console.log('Child 렌더링됨');
    return (
        <div>
            <h3>Child Component: {value}</h3>
            
        </div>
    );
});
export default Parent;