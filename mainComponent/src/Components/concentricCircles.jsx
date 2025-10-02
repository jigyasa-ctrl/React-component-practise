import React, { useState } from "react";
export default function ConcetricCircles({ number }) {
  const [showreplies, setShowReplies] = useState(false);
  const comments = [
    {
      id: 1,
      user: "Alice",
      text: "This is the first comment",
      likes: 12,
      timestamp: "2025-10-02T10:00:00Z",
      replies: [
        {
          id: 2,
          user: "Bob",
          text: "Replying to Alice",
          likes: 4,
          timestamp: "2025-10-02T10:05:00Z",
          replies: [
            {
              id: 3,
              user: "Charlie",
              text: "Replying to Bob (nested level 2)",
              likes: 2,
              timestamp: "2025-10-02T10:10:00Z",
              replies: [
                {
                  id: 4,
                  user: "Dana",
                  text: "Replying to Charlie (nested level 3)",
                  likes: 1,
                  timestamp: "2025-10-02T10:12:00Z",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          user: "Eve",
          text: "Another reply to Alice",
          likes: 6,
          timestamp: "2025-10-02T10:07:00Z",
          replies: [],
        },
      ],
    },
    {
      id: 6,
      user: "Frank",
      text: "This is a second top-level comment",
      likes: 10,
      timestamp: "2025-10-02T11:00:00Z",
      replies: [
        {
          id: 7,
          user: "Grace",
          text: "Replying to Frank",
          likes: 3,
          timestamp: "2025-10-02T11:10:00Z",
          replies: [],
        },
      ],
    },
  ];
  function createConcentrics(number) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `${number * 200}px`,
          width: `${number * 200}px`,
          border: "2px solid red",
        }}
      >
        {number > 1 && createConcentrics(number - 1)}
      </div>
    );
  }
  function renderNestedComments(comments) {
    return comments.map((d) => {
      return (
        <div>
          <p>{d.text}</p>
          <button onClick={() => setShowReplies(true)}>Show Replies</button>
          {d.replies.length > 0 && showreplies && (
            <p>{renderNestedComments(d.replies)}</p>
          )}
        </div>
      );
    });
  }
  return <div>{createConcentrics(number)}</div>;
}
