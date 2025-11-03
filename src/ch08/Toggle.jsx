import { useState } from "react";

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }
  return (
    <>
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    </>
  );
}

export default Toggle;
