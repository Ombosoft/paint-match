import { useEffect, useState } from "react";

const timeout = 3000;

// Boolean state that resets to false after a timeout
export default function useDisappearingState(initial) {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (initial) {
      setState(true);
      const timerId = setTimeout(() => {
        setState(false);
      }, timeout);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [initial]);
  return state;
}
