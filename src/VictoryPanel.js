import FastForwardIcon from "@mui/icons-material/FastForward";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { NumDropletsContext } from "./NumDropletsContext.js";
import { useVictorySound } from "./Sfx.js";
import { toasts } from "./Toasts.js";
import { randElement, simplePlural } from "./Utils.js";

function VictoryPanel({
  level,
  color,
  levelName,
  isVictory,
  onReset,
  onNextLevel,
}) {
  const numDroplets = useContext(NumDropletsContext);
  const victorySound = useVictorySound();
  const prevLevel = useRef(0);
  const toast = useRef(randElement(toasts));
  if (isVictory && level !== prevLevel.current) {
    prevLevel.current = level;
    toast.current = randElement(toasts);
  }
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} timeout={500} />;
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    if (isVictory) {
      victorySound();
      const timerId = setTimeout(() => {
        setDialogOpen(true);
      }, 600); // Delay opening dialog

      return () => {
        clearTimeout(timerId);
      };
    } else {
      setDialogOpen(false);
    }
  }, [isVictory, victorySound]);

  if (!isVictory) {
    return <></>;
  }
  return (
    <Dialog
      open={dialogOpen}
      TransitionComponent={Transition}
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
          <h4>
            You used {numDroplets} {simplePlural(numDroplets, "droplet")}
          </h4>
          <h3>{toast.current}</h3>
          <DialogActions>
            <Stack direction="row">
              <IconButton onClick={onReset} color="secondary" size="large">
                <ReplayIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={onNextLevel} color="secondary" size="large">
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
};

export default VictoryPanel;
