import { useCallback, useRef } from "react";

function useThrottle(func, delay) {
    const lastExecuted = useRef(Date.now());
    const throttled = useCallback((...args) =>{
        if(Date.now() - lastExecuted.current >= delay){
            func(...args)
            lastExecuted.current = Date.now()
        }

    }, [func, delay])
  return throttled;

}

export default function ThrottleComp() {
    const handleClick = function(){
        console.log("Cliked")
    }
    const thr = useThrottle(handleClick, 1000)
    return <div>
        <button onClick={thr}>Click me</button>
    </div>
}