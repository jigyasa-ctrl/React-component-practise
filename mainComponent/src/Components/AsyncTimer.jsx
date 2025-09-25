import { useState, useRef, useEffect } from "react";

export default function AsyncTimerComponent() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const startTimerref = useRef(null);
  const [comments, setComments] = useState([]);
  const [renderedData, setRenderedData] = useState([]);
  const fetchComments = function () {
    return new Promise((resolve, reject) => {
      const content = [
        {
          timestamp: 1.3,
          title: "Comment 1",
        },
        {
          timestamp: 2.3,
          title: "Comment 2",
        },
        {
          timestamp: 3.3,
          title: "Comment 3",
        },
      ];
      setTimeout(() => {
        resolve(content);
      }, 2000);
    });
  };
  const loadComments = function () {
    fetchComments().then((data) => {
      setComments(data);
      startTimerref.current = Date.now();
    });
  };

  useEffect(() => {
    loadComments();
  }, []);

  useEffect(() => {
    if (comments?.length > 0) {
      timerRef.current = setInterval(() => {
        let elapsed = (Date.now() - startTimerref.current) / 1000;
        setTimer(elapsed.toFixed(1));
        setRenderedData((prev) => {
          const data = comments.filter(
            (d) => d.timestamp == elapsed.toFixed(1)
          );
          if (data.length > 0) {
            return [...prev, ...data];
          }
          return prev;
        });
      }, 100);
    }
    return () => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
    };
  }, [comments]);
  return (
    <div>
      <div>timer: {timer}</div>
      {renderedData?.map((data, index) => (
        <div key={index}>
          {data.title} - {data.timestamp}
        </div>
      ))}
    </div>
  );
}
