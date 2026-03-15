import React, { useEffect } from "react";
export default function Square({ index, setClickOrder, clickOrder }) {
  const handleClick = function (e) {
    e.stopPropagation()
    setClickOrder((prev) => [...prev, index]);
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      class={`square ${index !== 1 ? `left-20` : ""}`}
      style={{
        backgroundColor: clickOrder.includes(index) ? "green" : "white",
      }}
    ></div>
  );
}
