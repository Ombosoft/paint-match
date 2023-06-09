import ReplayIcon from "@mui/icons-material/Replay";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { NumDropletsContext } from "../Context/NumDropletsContext";
import { useResetSound } from "../Sfx";
import { useResetTutorial } from "../Tutorial";
import useDisappearingState from "../Util/DisappearingState";
import NiceButton from "./NiceButton";

// Start over button in the main game screen and tutorial for it
function ResetButton({ enabled, level, resetColors }) {
    const numDroplets = useContext(NumDropletsContext);
    const resetSound = useResetSound();
    const [allowTutorial, onUsed] = useResetTutorial(numDroplets, level);
    const showTutorial = useDisappearingState(allowTutorial && enabled);
    const enableReset = showTutorial || enabled;

    function handleClick() {
        resetSound();
        onUsed();
        resetColors();
    }

    return (
        <NiceButton
            id="reset"
            title={
                showTutorial ? <h1>Starting fresh can help</h1> : "Start over"
            }
            enabled={enableReset}
            onClick={handleClick}
            forceTooltip={showTutorial}
        >
            <ReplayIcon fontSize="large" />
        </NiceButton>
    );
}

ResetButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    resetColors: PropTypes.func.isRequired,
};

export default ResetButton;
