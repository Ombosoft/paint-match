import FastForwardIcon from '@mui/icons-material/FastForward';
import ReplayIcon from "@mui/icons-material/Replay";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, Stack } from "@mui/material";
import PropTypes from "prop-types";
import React, { forwardRef, useRef } from "react";
import { toasts } from "./Toasts.js";
import { randElement, simplePlural } from "./Utils.js";

function VictoryPanel({ level, color, levelName, numDroplets, isVictory, onReset, onNextLevel }) {
    const prevLevel = useRef(0);
    const toast = useRef(randElement(toasts));
    if (isVictory && level !== prevLevel.current) {
        prevLevel.current = level;
        toast.current = randElement(toasts);
    }
    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    if (!isVictory) {
        return (<></>);
    }
    return (
        <Dialog
            open={isVictory}
            TransitionComponent={Transition}
            PaperProps={{
                sx: {
                  borderColor: `#${color}`, 
                  borderWidth: '1em',
                  borderStyle: 'solid',
                },
              }}        >
            <DialogTitle sx={{
                fontWeight: "bold", textTransform: "capitalize",
            }}>
                {level} {levelName}
            </DialogTitle>
            <DialogContent>
                <Stack direction={"column"} alignItems="center" sx={{
                    marginLeft: "1em",
                    marginRight: "1em",
                }}>
                    <h4>You used {numDroplets} {simplePlural(numDroplets, 'droplet')}</h4>
                    <h3>{toast.current}</h3>
                    <DialogActions>
                    <Stack direction="row">
                        <IconButton
                            onClick={onReset}
                            color="secondary"
                            size="large">
                            <ReplayIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            onClick={onNextLevel}
                            color="secondary"
                            size="large">
                            <FastForwardIcon fontSize="large" />
                        </IconButton>
                    </Stack>
                    </DialogActions>

                </Stack>
            </DialogContent>
        </Dialog>
    )
        ;
}

VictoryPanel.propTypes = {
    level: PropTypes.number.isRequired,
    levelName: PropTypes.string.isRequired,
    numDroplets: PropTypes.number.isRequired,
    isVictory: PropTypes.bool.isRequired,
    onReset: PropTypes.func.isRequired,
    onNextLevel: PropTypes.func.isRequired,
};

export default VictoryPanel;