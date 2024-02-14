import { useCallback } from "react";

let timeoutId: number;

const useDebounce = (
  cb: (...args: unknown[]) => void,
  delay: number = 1000
) => {
  return useCallback((...args: unknown[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  }, []);
};

export default useDebounce;
