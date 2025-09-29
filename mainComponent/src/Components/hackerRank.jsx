import { useState, useEffect, useRef } from "react";

export default function HackerRank() {
  const [ids, setIds] = useState([]);
  const [news, setNews] = useState([]);
  const lastExecuted = useRef(0);
  const renderNewsBox = (d) => {
    const { title, by, time } = d;
    return (
      <div
        id={time}
        style={{
          backgroundColor: "#fff",
          textAlign: "left",
          padding: "10px",
          margin: "10px",
          border: "2px solid #333",
          
        }}
      >
        <p
          style={{
            fontWeight: "600",
          }}
        >
          {title}
        </p>
        <div>
          by {by} . {time}
        </div>
      </div>
    );
  };
  const getNewsOFID = async (id) => {
    const data = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    );
    return await data.json();
  };

  const getNewsIds = function () {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        lastExecuted.current += lastExecuted.current + 6;
        setIds(res);
      });
  };

  useEffect(() => {
    if (news.length == 0) {
      getNewsIds();
    }
  }, []);

  useEffect(() => {
    if (ids.length > 0) {
      Promise.all(ids.map((id) => getNewsOFID(id))).then((allNews) => {
        setNews(allNews);
      });
      lastExecuted.current += lastExecuted.current + 6;
    }
  }, [ids]);

  return (
    <div
      style={{
        backgroundColor: "beige",
        padding: "20px",
        width: "100%",
        height:"100vh",
        overflow: "overlay"
      }}
    >
      <h3
        style={{
          color: "#FF6602",
        }}
      >
        Hacker Rank News
      </h3>
      {news.length == 0 ? (
        <div>Loading...</div>
      ) : (
        news.map((d) => {
          return renderNewsBox(d);
        })
      )}
    </div>
  );
}
