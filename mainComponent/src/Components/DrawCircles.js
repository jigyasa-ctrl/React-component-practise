import "./styles.css";
import React, { useState } from "react";
export default function Circles() {
  const [circles, setcircles] = useState([]);
  function captureClick(e) {
    const container = document.getElementById("container");
    let { clientX, clientY } = e;
    const rect = container.getBoundingClientRect();
    console.log(rect);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    // const circle = document.createElement("div");
    style = {
      width: "10px",
      height: "10px",
      background: "red",
      borderRadius: "50%",
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
    };
    setcircles((prev) => [...prev, style]);
    // circle.style.width = "10px";
    // circle.style.height = "10px";
    // circle.style.background = "red";
    // circle.style.position = "absolute";
    // circle.style.borderRadius = "50%";

    // circle.style.left = `${x}px`;
    // circle.style.top = `${y}px`;

    // container.appendChild(circle);
  }
  return (
    <div id="container" className="wrapper" onClick={(e) => captureClick(e)}>
      {circles?.map((item, index) => (
        <div key={index} style={item}></div>
      ))}
    </div>
  );
}
