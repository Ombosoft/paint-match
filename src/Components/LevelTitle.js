import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { colorTable } from "../Levels";

function LevelTitle({ onDebug, level }) {
    const [clickCount, setClickCount] = useState(0);
    const [debug, setDebug] = useState(false);

    function maybeTriggerDebug() {
        setClickCount((prev) => prev + 1);
        if (clickCount < 2) return;
        const newDebug = !debug;
        setDebug(newDebug);
        onDebug(newDebug);
    }

    function clearLocalStorage() {
        localStorage.clear();
    }

    return (
        <>
            <Box
                onClick={maybeTriggerDebug}
                style={{
                    fontSize: "min(6vh, max(10px, 5vw))",
                    textTransform: "capitalize",
                }}
            >
                Level {level} <span style={{fontWeight: "bold"}}>{colorTable[level].name}</span>
            </Box>
            {debug && (
                <Button size="small" onClick={clearLocalStorage}>
                    CLS
                </Button>
            )}
        </>
    );
}

LevelTitle.propTypes = {
    onDebug: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired,
};

export default LevelTitle;
