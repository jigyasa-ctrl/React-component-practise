import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(50);
  useEffect(() => {
    const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setCount((prev) => (prev += 50));
      }
    };
    document.addEventListener("scroll", onScroll);
  }, [count]);
  const element = Array(count).fill("abc");
  element.push();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {element.map((item, index) => (
        <span>{index}</span>
      ))}
    </div>
  );
}
