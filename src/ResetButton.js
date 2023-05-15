import ReplayIcon from "@mui/icons-material/Replay";
import PropTypes from 'prop-types';
import React, { useContext } from "react";
import useDisappearingState from "./DisappearingState";
import NiceButton from "./NiceButton";
import { NumDropletsContext } from "./NumDropletsContext";
import { useResetSound } from "./Sfx";
import { useResetTutorial } from "./Tutorial";

// Start over button in the main game screen and tutorial for it
function ResetButton({ level, allowReset, resetColors }) {
    const numDroplets = useContext(NumDropletsContext);
    const resetSound = useResetSound();
    const [canShowReset, onResetColors] = useResetTutorial();
    const showTutorial = useDisappearingState(canShowReset(level, numDroplets));
    const enableReset = showTutorial || allowReset;

    function handleClick() {
        resetSound();
        onResetColors();
        resetColors();
    }

    return (
        <NiceButton
            title={showTutorial ? (<h1>Stuck? Press here to reset</h1>) : "Start over"}
            enabled={enableReset}
            onClick={handleClick}
            forceTooltip={showTutorial}
            xOffset={showTutorial ? 100 : 0}
        >
            <ReplayIcon fontSize="large" />
        </NiceButton>
    );
}

ResetButton.propTypes = {
    level: PropTypes.number.isRequired,
    allowReset: PropTypes.bool.isRequired,
    resetColors: PropTypes.func.isRequired,
}

export default ResetButton;