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
import { NumDropletsContext } from "../Context/NumDropletsContext.js";
import { useVictorySound } from "../Sfx.js";
import { toasts } from "../Toasts.js";
import { randElement, simplePlural } from "../Util/Utils.js";
import LevelsButton from "./LevelsButton.js";
import {victoryPanelDelay, victorySoundDelay} from "../Constants.js"

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
    const prevLevel = useRef(0);
    const toast = useRef(randElement(toasts));
    if (isVictory && level !== prevLevel.current) {
        prevLevel.current = level;
        toast.current = randElement(toasts);
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

    return (
        <Dialog
            open={dialogOpen}
            PaperProps={{
                sx: {
                    borderColor: `#${color}`,
                    borderWidth: "1em",
                    borderStyle: "outset",
                },
            }}
        >
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
            <DialogContent>
                <Stack
                    direction={"column"}
                    alignItems="center"
                    sx={{
                        marginLeft: "1em",
                        marginRight: "1em",
                    }}
                >
                    {showDroplets && (
                        <h4>
                            You used {numDroplets}{" "}
                            {simplePlural(numDroplets, "droplet")}
                        </h4>
                    )}
                    <h3>{toast.current}</h3>
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
                                onClick={onNextLevel}
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
