import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function InfiniteScroll() {
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);
  const loaderRef = useRef(null);
  const url = `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=20`;

  const fetchData = async function () {
    const response = await fetch(url).then((res) => res.json());
    if (response.length > 0) {
      setItems((prev) => [...prev, ...response]);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) { // when loader intersects with viewport
          setPageNum((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      }
    );
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore]);

  useEffect(() => {
    fetchData();
  }, [pageNum]);

  return (
    <div className="App">
      {items.length > 0 &&
        items?.map((data, index) => <div key={index}>{data.title}</div>)}
      {hasMore && <div ref={loaderRef}>Loading...</div>}
      {!hasMore && <div>No more data</div>}
    </div>
  );
}
