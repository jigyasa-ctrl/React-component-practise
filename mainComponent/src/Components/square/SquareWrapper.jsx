// import "./styles.css";
import Square from "./Square";

import React, { useState, useEffect, useRef } from "react";

const MemoizedSquare = React.memo(Square);

export default function SquareWrapper() {
  const [clickOrder, setClickOrder] = useState([]);

  useEffect(() => {
    if (clickOrder.length == 3) {
        let clicklog = clickOrder.slice()
        clickOrder.forEach((item) => {
            let timer = setTimeout(() => {
                clicklog.pop()
                setClickOrder(prev => [...clicklog]);
                clearTimeout(timer);
              }, (item+1) * 1000);
        })
    }
   
  }, [clickOrder]);
  return (
    <div className="App">
      {Array(3)
        .fill("abc")
        .map((item, index) => (
          <Square
            key={index}
            index={index}
            setClickOrder={setClickOrder}
            clickOrder={clickOrder}
          />
        ))}
    </div>
  );
}
