// OLX interview round 2 -- this is wrong solution / try to remember the question and solve it
import React, { useState, useRef, useEffect } from "react"; 
export default function Progressbar({ setIsProgressComplete }) {
  const [Percentage, setPercentage] = useState(0);
  const startTime = useRef();
  useEffect(() => {
    // console.log(startTime.current);
    if (startTime.current >= 2000) {
      console.log("comes here");
      clearInterval(interval);
      setIsProgressComplete("completed");
      return;
    }
    let interval = setInterval(() => {
      setIsProgressComplete("pending");
      startTime.current += 100;
      setPercentage((prev) => prev + 2);
    }, 100);

    
  }, []);
  return (
    <progress min={0} max={100} value={Percentage}>
      {Percentage}
    </progress>
  );
}




App



import "./styles.css";
import { useRef, useState, useEffect } from "react";
import Progressbar from "./components/progressbar.js";

export default function App() {
  const [progressCount, setProgressCount] = useState(0);
  const timer = useRef();
  const startTime = useRef();
  const [isProgressComplete, setIsProgressComplete] = useState("completed");

  // function updateStartTime(value) {
  //   startTime.current += 100;
  // }

  useEffect(() => {}, [progressCount, isProgressComplete]);

  function renderProgress() {
    console.log(isProgressComplete, "isProgressComplete");
    if (isProgressComplete == "completed") {
      setProgressCount((prev) => prev + 1);
    }
  }
  return (
    <div className="App">
      <button onClick={renderProgress}>Add</button>
      {/* <Progressbar /> */}
      {/* {JSON.stringify(Array(progressCount))} */}
      {Array(progressCount)
        .fill("abc")
        ?.map(() => (
          <Progressbar
            setIsProgressComplete={setIsProgressComplete}
            // startTime={startTime}
            // updateStartTime={updateStartTime}
          />
        ))}
    </div>
  );
}
