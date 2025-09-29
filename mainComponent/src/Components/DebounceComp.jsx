import { useRef, useCallback } from "react";
const useDebounce = function(func, delay) {
    const timeoutRef = useRef(0)
    const debounce = useCallback((...args) => {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            func(...args);
        }, delay)

    }, [delay, func])
    return debounce
}

export default function DebounceComp() {
    const handleClick = () =>{
        console.log("clicked")
    }
    const debounce = useDebounce(handleClick, 1000)
    return <div>
        <button onClick={debounce}>Click me</button>
    </div>
}