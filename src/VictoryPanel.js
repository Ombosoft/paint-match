import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PropTypes from "prop-types";
import { React, useRef } from "react";
import { toasts } from "./Toasts.js";
import { randElement } from "./Utils.js";

function VictoryPanel({ level, isVictory, onNextLevel }) {
    const prevLevel = useRef(0);
    const toast = useRef(randElement(toasts));
    if (isVictory && level !== prevLevel.current) {
        prevLevel.current = level;
        toast.current = randElement(toasts);
    }
    return <Collapse in={isVictory} sx={{
        marginTop: "1em",
        position: 'fixed',
        bottom: "3em",

    }}>
        <Alert
            action={
                <IconButton
                    onClick={onNextLevel}
                    color="secondary"
                    size="large">
                    <SkipNextIcon fontSize="large" />
                </IconButton>
            }
            sx={{ mb: 2 }}
        >
            <AlertTitle sx={{ fontSize: 22, marginTop: 0, marginBottom: 0 }}>{toast.current}</AlertTitle>
        </Alert>
    </Collapse>;
}

VictoryPanel.propTypes = {
    level: PropTypes.number.isRequired,
    isVictory: PropTypes.bool.isRequired,
    onNextLevel: PropTypes.func.isRequired,
};

export default VictoryPanel;