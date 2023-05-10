import PropTypes from 'prop-types';
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import NiceButton from "./NiceButton";

function ResetButton({ showTutorial, allowReset, resetColors }) {
    const enableReset = showTutorial || allowReset;

    return (
        <NiceButton
            title={showTutorial ? (<h1>Stuck? Press here to reset</h1>) : "Start over"}
            enabled={enableReset}
            onClick={resetColors}
            forceTooltip={showTutorial}
            xOffset={showTutorial ? 100 : 0}
        >
            <ReplayIcon fontSize="large" />
        </NiceButton>
    );
}

ResetButton.propTypes = {
    showTutorial: PropTypes.bool.isRequired,
    allowReset: PropTypes.bool.isRequired,
    resetColors: PropTypes.func.isRequired,
}

export default ResetButton;