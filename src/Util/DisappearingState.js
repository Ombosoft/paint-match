import { useEffect, useState } from "react";
import { hideTooltipDelay } from "../Constants";

const Unused = 0;
const On = 1;
const Off = 2;

// Boolean state that resets to false after a timeout
export default function useDisappearingState(initial) {
    const [state, setState] = useState(Unused);
    useEffect(() => {
        if (!initial && state === On) {
            setState(Off);
        }
        if (initial && state !== Off) {
            if (state === Unused) {
                setState(On);
            }
            const timerId = setTimeout(() => {
                setState(Off);
            }, hideTooltipDelay);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [initial, state]);
    return state === On;
}
