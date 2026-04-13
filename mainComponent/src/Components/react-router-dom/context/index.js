import React, { createContext, useEffect, useState } from "react";
export const RouterContext = createContext();
export function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname);
  const [showLink, setShowLink] = useState(true);

  useEffect(() => {
    const handlePop = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePop);

    return () => {
      window.removeEventListener("popstate", handlePop);
    };
  }, []);
  return (
    <RouterContext.Provider value={{ path, setPath, showLink, setShowLink }}>
      {children}
    </RouterContext.Provider>
  );
}
