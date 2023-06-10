import { Box, Fade, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { hintTypingDelay, imgPath } from "../Constants";
import shiftPopper from "../Util/TooltipUtils";
import Cursor from "./Cursor";

export function HintBox({ hint }) {
    const open = hint !== null;
    return (
        <Stack direction="row" alignSelf="start" position="relative">
            <Fade in={open} timeout={500}>
                <Box position="absolute" marginLeft="10px" marginRight="10px">
                    <Tooltip
                        open={open}
                        placement="right"
                        arrow
                        {...shiftPopper(0, -110)}
                        title={<HintMessage hint={hint} />}
                        componentsProps={{
                            tooltip: {
                                sx: {
                                    maxWidth: "70vw",
                                },
                            },
                        }}
                    >
                        <img
                            src={imgPath("AIPersona.png")}
                            alt="AI Persona"
                            height="130px"
                            style={{
                                opacity: "60%",
                            }}
                        />
                    </Tooltip>
                </Box>
            </Fade>
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
        <Box>
            <Typography fontSize="2em" fontWeight="bold">
                {hint.slice(0, words)} {animationActive && <Cursor />}
            </Typography>
        </Box>
    );
}
