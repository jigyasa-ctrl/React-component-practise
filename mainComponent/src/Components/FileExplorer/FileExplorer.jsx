import React, { useState } from "react";
export default function FileExplorer({
  item,
  renderFileExplorer,
  handleDelete,
  handleAdd,
}) {
  const [show, setShow] = useState(true);
  const [input, setInput] = useState("");
  if (item.type == "file") {
    return (
      <h3>
        {item.name}
        <button onClick={() => handleDelete(item.id)}>x</button>
      </h3>
    );
  } else {
    return (
      <div className="folder">
        <h2 onClick={() => setShow(!show)}>
          {item.name}{" "}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(item.id);
            }}
          >
            x
          </button>{" "}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAdd(item.id, input);
              setInput("");
            }}
          >
            +
          </button>
        </h2>
        {show && (
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        )}
        {show && renderFileExplorer(item.children)}
      </div>
    );
  }
}
