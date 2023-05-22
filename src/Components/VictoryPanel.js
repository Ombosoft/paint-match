import FastForwardIcon from "@mui/icons-material/FastForward";
import ReplayIcon from "@mui/icons-material/Replay";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { victoryPanelDelay, victorySoundDelay } from "../Constants.js";
import { NumDropletsContext } from "../Context/NumDropletsContext.js";
import { colorTable } from "../Levels.js";
import { useVictorySound } from "../Sfx.js";
import { toasts } from "../Toasts.js";
import { randElement, simplePlural } from "../Util/Utils.js";
import LevelsButton from "./LevelsButton.js";

function VictoryPanel({
    level,
    color,
    levelName,
    isVictory,
    onReset,
    onNextLevel,
    showDroplets,
}) {
    const numDroplets = useContext(NumDropletsContext);
    const victorySound = useVictorySound();
    // Sticky content
    const contentProps = useRef({
        showDroplets: showDroplets,
        toast: getToast(level),
        color: color,
        numDroplets: numDroplets,
        level: level,
        levelName: levelName,
    });
    const prevLevel = useRef(0);
    if (isVictory) {
        if (level !== prevLevel.current) {
            prevLevel.current = level;
            contentProps.current.toast = getToast(level);
        }
        contentProps.current.showDroplets = !colorTable[level].toast && showDroplets;
        contentProps.current.color = color;
        contentProps.current.numDroplets = numDroplets;
        contentProps.current.level = level;
        contentProps.current.levelName = levelName;
    }
    const [dialogOpen, setDialogOpen] = useState(false);
    // Delay opening dialog
    useEffect(() => {
        if (isVictory) {
            const timerId1 = setTimeout(() => {
                setDialogOpen(true);
            }, victoryPanelDelay);
            const timerId2 = setTimeout(() => {
                victorySound();
            }, victorySoundDelay);

            return () => {
                clearTimeout(timerId1);
                clearTimeout(timerId2);
            };
        } else {
            setDialogOpen(false);
        }
    }, [isVictory, victorySound]);

    function handleNextLevel() {
        setDialogOpen(false);
        if (isVictory) {
            onNextLevel();
        }
    }

    return (
        <Dialog
            open={dialogOpen}
            PaperProps={{
                sx: {
                    borderColor: `#${contentProps.current.color}`,
                    borderWidth: "1em",
                    borderStyle: "outset",
                },
            }}
        >
            <VictoryTitle contentProps={contentProps.current} />
            <DialogContent>
                <Stack
                    direction={"column"}
                    alignItems="center"
                    sx={{
                        marginLeft: "1em",
                        marginRight: "1em",
                    }}
                >
                    <VictoryMessage contentProps={contentProps.current} />
                    <DialogActions>
                        <Stack direction="row">
                            <LevelsButton
                                onClick={() => setDialogOpen(false)}
                            />
                            <IconButton
                                onClick={onReset}
                                color="secondary"
                                size="large"
                            >
                                <ReplayIcon fontSize="large" />
                            </IconButton>
                            <IconButton
                                onClick={handleNextLevel}
                                color="secondary"
                                size="large"
                            >
                                <FastForwardIcon fontSize="large" />
                            </IconButton>
                        </Stack>
                    </DialogActions>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

function VictoryTitle({ contentProps }) {
    const { color, level, levelName } = contentProps;
    return (
        <DialogTitle
            sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                textShadow:
                    "4px 4px 10px white, -1px -1px 1px #FFFFFFB0, 1px 1px 1px #FFFFFFB0, -1px 0px 1px #FFFFFFB0, 1px 0px 1px #FFFFFFB0",
                backgroundColor: `#${color}`,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "white",
            }}
        >
            {level} {levelName}
        </DialogTitle>
    );
}

function VictoryMessage({ contentProps }) {
    const { showDroplets, numDroplets, toast } = contentProps;
    return (
        <>
            {" "}
            {showDroplets && (
                <h4>
                    {numDroplets} {simplePlural(numDroplets, "droplet")} used
                </h4>
            )}
            <h3>{toast}</h3>
        </>
    );
}

function getToast(level) {
    return colorTable[level].toast ?? randElement(toasts);
}

VictoryPanel.propTypes = {
    level: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    levelName: PropTypes.string.isRequired,
    isVictory: PropTypes.bool.isRequired,
    onReset: PropTypes.func.isRequired,
    onNextLevel: PropTypes.func.isRequired,
    showDroplets: PropTypes.bool.isRequired,
};

export default VictoryPanel;
