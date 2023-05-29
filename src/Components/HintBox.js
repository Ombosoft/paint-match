import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { hintTypingDelay } from "../Constants";
import Cursor from "./Cursor";

export function HintBox({ hint }) {
    const [words, setWords] = useState(0);
    const animationActive = hint !== null && words < hint.length;

    useEffect(() => {
        if (!animationActive) {
            return;
        }
        const timerId = setTimeout(() => {
            setWords((prev) => prev + 1);
        }, hintTypingDelay);

        return () => {
            clearTimeout(timerId);
        };
    }, [animationActive, setWords, words]);

    // Hack to refresh tooltip position
    useEffect(() => {
        window.dispatchEvent(new Event("resize"));
    }, [words]);

    if (hint === null) {
        return <></>;
    }
    return (
        <Box>
            {hint.slice(0, words)} {animationActive && <Cursor />}
        </Box>
    );
}
