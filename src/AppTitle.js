import React, {useState} from "react";

export function AppTitle({onDebug}) {
    const [clickCount, setClickCount] = useState(0);
    const [debug, setDebug] = useState(false);

    function maybeTriggerDebug() {
        setClickCount((prev) => prev + 1);
        if (clickCount < 2) return;
        const newDebug = !debug;
        setDebug(newDebug);
        onDebug(newDebug);
    }

    return (
        <p onClick={maybeTriggerDebug}>
            Paint Match
        </p>
    );
}