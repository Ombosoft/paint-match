import { Box, Stack, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { hintTypingDelay, imgPath } from "../Constants";
import shiftPopper from "../Util/TooltipUtils";
import Cursor from "./Cursor";

export function HintBox({ hint }) {
    return (
        <Stack direction="row" alignSelf="start" position="relative">
            {hint && (
                <Box position="absolute" marginLeft="10px">
                    <Tooltip
                        open={true}
                        placement="right"
                        arrow
                        {...shiftPopper(0, -100)}
                        title={<HintMessage hint={hint} />}
                    >
                        <img
                            src={imgPath("AIPersona.png")}
                            alt="AI Persona"
                            height="150px"
                            style={{ opacity: "60%" }}
                        />
                    </Tooltip>
                </Box>
            )}
        </Stack>
    );
}

function HintMessage({ hint }) {
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
        <h1>
            <Box>
                {hint.slice(0, words)} {animationActive && <Cursor />}
            </Box>
        </h1>
    );
}
