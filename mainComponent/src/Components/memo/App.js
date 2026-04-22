import { usememoPollyfill } from "./usememoPolyfill";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [anotherValue, setAnotherValue] = useState(1);

  const memoizedValue = usememoPollyfill(() => {
    return anotherValue + count;
  }, [anotherValue]);

  return (
    <div className="App">
      <p>Count: {count}</p>
      <p>Memoized: {memoizedValue}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase count
      </button>
      <button onClick={() => setAnotherValue((prevVal) => prevVal + 1)}>
        Increase Another count
      </button>
    </div>
  );
}
