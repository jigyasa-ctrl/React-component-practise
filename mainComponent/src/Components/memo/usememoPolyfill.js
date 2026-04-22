import { useEffect, useRef } from "react";

export const usememoPollyfill = (callback, deps) => {
  const memoizedRef = useRef(null);

  const areDepsaSame = (prevdeps, deps) => {
    if (!prevdeps || !deps) return false;
    if (prevdeps.length !== deps.length) return false;
    for (let i = 0; i < deps.length; i++) {
      if (!Object.is(prevdeps[i], deps[i])) return false;
    }
    return true;
  };

  if (!memoizedRef.current || !areDepsaSame(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: callback(),
      deps: deps,
    };
  }

  return memoizedRef.current.value;
};
