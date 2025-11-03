import { useState } from "react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleClick() {
    // setIsConfirmed(true);
    // setIsConfirmed(!isConfirmed);
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  }

  return (
    <button onClick={handleClick} disabled={isConfirmed}>
      확인
    </button>
  );
}

export default ConfirmButton;
