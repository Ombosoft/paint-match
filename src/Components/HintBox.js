import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { hintTypingDelay } from "../Constants";

export function HintBox({ hint }) {
    const [words, setWords] = useState(0);
    
    useEffect(() => {
        if (hint === null || words >= hint.length) {
            return;
        }
        const timerId = setTimeout(() => {
            setWords(prev => prev + 1);
        }, hintTypingDelay);

        return () => {
            clearTimeout(timerId);
        };
    }, [hint, words]);
    
    // Hack to refresh tooltip position
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, [words]);
    
    if (hint === null) {
        return (<></>);
    }
    return <Box>{hint.slice(0, words)}</Box>;
}
