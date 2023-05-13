import ReplayIcon from "@mui/icons-material/Replay";
import PropTypes from 'prop-types';
import React from "react";
import NiceButton from "./NiceButton";
import { useResetTutorial } from "./Tutorial";

// Start over button in the main game screen and tutorial for it
function ResetButton({ level, numDroplets, allowReset, resetColors }) {
    const [canShowReset, onResetColors] = useResetTutorial();
    const showTutorial = canShowReset(level, numDroplets);
    const enableReset = showTutorial || allowReset;

    function handleClick() {
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
    numDroplets: PropTypes.number.isRequired,
    allowReset: PropTypes.bool.isRequired,
    resetColors: PropTypes.func.isRequired,
}

export default ResetButton;