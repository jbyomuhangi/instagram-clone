import { useEffect, useRef } from "react";

import { empty } from "@/utils/noopUtils";

const useResizeObserver = <E extends HTMLElement>({
  ignoreResize = false,
  callback = empty,
}: {
  ignoreResize?: boolean;
  callback?: (element: E, entry: ResizeObserverEntry) => void;
}) => {
  const ref = useRef<E>(null);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;
    if (ignoreResize) return;

    const observer = new ResizeObserver((entries) => {
      callback(element, entries[0]);
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ignoreResize, callback, ref]);

  return ref;
};

export default useResizeObserver;
