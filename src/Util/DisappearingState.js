import { useEffect, useState } from "react";

const timeout = 4000;

const Unused = 0;
const On = 1;
const Off = 2;

// Boolean state that resets to false after a timeout
export default function useDisappearingState(initial) {
    const [state, setState] = useState(Unused);
    useEffect(() => {
        if (initial && state !== Off) {
            if (state === Unused) {
                setState(On);
            }
            const timerId = setTimeout(() => {
                setState(Off);
            }, timeout);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [initial, state]);
    return state === On;
}
