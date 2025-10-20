import { useRef } from 'react';

function TextInputWithFocusButton() {
    // ref.current 값은 null로 초기화 되어 있다.
    const inputRef = useRef(null); // 객체: { current: null }

    const onClickFocus = () => {
        // ref.current 는 마운트된 input 엘리먼트를 가리킨다.
        inputRef.current.focus();
    }
    // ref.current 가 가리키는 값을 input 노드 객체의 주소로 설정.
    return (
        <>
            <input type="text" ref={inputRef} />        
            <button onClick={onClickFocus}>Focus the input</button>
            <button>123</button>
        </>
    );
}
export default TextInputWithFocusButton;