import React, { useContext } from "react";
import { RouterContext } from "./context";
export default function Link({ children, to, component }) {
  const { setPath, path: currentPath, setShowLink } = useContext(RouterContext);
  function handleClick(e) {
    e.preventDefault();
    window.history.pushState({}, "", to);
    setPath(to);
    setShowLink(false);
  }
  return (
    <>
      <a href={to} onClick={handleClick}>
        {children}
      </a>
      {/* {currentPath == to ? component : null} */}
    </>
  );
}
