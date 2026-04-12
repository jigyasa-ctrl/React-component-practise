import React, { useState, useEffect } from "react";
export default function Progressbar({ currentIndex, index, setCurrentIndex }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (currentIndex == index) {
      let timer;
      if (percentage == 0) {
        timer = setInterval(() => {
          setPercentage((prev) => prev + 10);
        }, 100);
      } else if (percentage >= 100) {
        setCurrentIndex((prev) => prev + 1);
        clearInterval(timer);
      }
    }
  });
  return <progress min="0" max="100" value={percentage}></progress>;
}
