import { useState } from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)
    const increment = () => setCount(Math.min(count + 1, 10))
    const decrement = () => setCount(Math.max(count - 1, 0))

    return { count, increment, decrement }
}
export default useCounter;