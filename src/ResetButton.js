import ReplayIcon from "@mui/icons-material/Replay";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import useDisappearingState from "./DisappearingState";
import NiceButton from "./NiceButton";
import { NumDropletsContext } from "./NumDropletsContext";
import { useResetSound } from "./Sfx";
import { useResetTutorial } from "./Tutorial";

// Start over button in the main game screen and tutorial for it
function ResetButton({ level, enabled, resetColors }) {
    const numDroplets = useContext(NumDropletsContext);
    const resetSound = useResetSound();
    const [allowTutorial, onUsed] = useResetTutorial(numDroplets);
    const showTutorial = useDisappearingState(allowTutorial && enabled);
    const enableReset = showTutorial || enabled;

    function handleClick() {
        resetSound();
        onUsed();
        resetColors();
    }

    return (
        <NiceButton
            title={
                showTutorial ? (
                    <h1>Starting fresh can help</h1>
                ) : (
                    "Start over"
                )
            }
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
    enabled: PropTypes.bool.isRequired,
    resetColors: PropTypes.func.isRequired,
};

export default ResetButton;
