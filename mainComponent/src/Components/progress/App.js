import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Comments from "./Comments";
import Progressbar from "./Progressbar";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressCount, setProgresscount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setProgresscount((prev) => prev + 1)}>Add</button>
      {Array(progressCount)
        .fill("abc")
        .map((item, index) => {
          return (
            <Progressbar
              key={index}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          );
        })}
    </div>
  );
}
