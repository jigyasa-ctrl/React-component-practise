import { useState } from "react";
import FileExplorer from "./FileExplorer";

export default function FileExplorerWrapper() {
  const generaterandomId = function () {
    return Math.random().toString(36).substring(2, 10);
  };
  const data = [
    {
      name: "src",
      type: "folder",
      id: generaterandomId(),
      children: [
        {
          name: "App.js",
          type: "file",
          id: generaterandomId(),
        },
        {
          name: "components",
          type: "folder",
          id: generaterandomId(),
          children: [
            {
              name: "MainWrapper.js",
              type: "file",
              id: generaterandomId(),
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      id: generaterandomId(),
    },
  ];
  const [list, setList] = useState(data);
  const deletenode = function (node, id) {
    return node
      .filter((item) => item.id !== id)
      .map((item) => {
        return {
          ...item,
          children: item.children && deletenode(item.children, id),
        };
      });
  };
  const addnode = function (node, id, add) {
    return node.map((item) => {
      if (item.id == id && item.children) {
        return {
          ...item,
          children: [...item.children, add],
        };
      }
      if (item.children) {
        return {
          ...item,
          children: addnode(item.children, id, add),
        };
      }
      return item;
    });
  };
  const handleDelete = function (id) {
    setList((prev) => deletenode(prev, id));
  };
  const handleAdd = function (id, value) {
    let type;
    let add;
    if (value.includes(".")) {
      type = "file";
      add = {
        name: value,
        type: type,
        id: generaterandomId(),
      };
    } else {
      type = "folder";
      add = {
        name: value,
        type: type,
        id: generaterandomId(),
        children: [],
      };
    }
    setList((prev) => addnode(prev, id, add));
  };

  const renderFileExplorer = function (list) {
    return list.map((item) => {
      return (
        <FileExplorer
          item={item}
          renderFileExplorer={renderFileExplorer}
          key={item.id}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      );
    });
  };
  return <div className="App">{renderFileExplorer(list)}</div>;
}
