import FastForwardIcon from "@mui/icons-material/FastForward";
import PropTypes from 'prop-types';
import React from "react";
import useDisappearingState from "./DisappearingState";
import NiceButton from "./NiceButton";
import { useSkipSound } from "./Sfx";
import { useSkipLevelTutorial } from "./Tutorial";

// Button and tutorial
function SkipLevelButton({ enabled, nextLevel }) {
    const [allowSkipLevelTutorial, onSkipLevelUsed] = useSkipLevelTutorial();
    const showTutorial = useDisappearingState(allowSkipLevelTutorial && enabled);
    const skipSound = useSkipSound();

    function handleClick() {
        skipSound();
        onSkipLevelUsed();
        nextLevel();
    }

    return (
        <NiceButton
            title={allowSkipLevelTutorial ? (<h1>Good enough! You may skip this level</h1>) : "Skip level"}
            enabled={enabled}
            onClick={handleClick}
            forceTooltip={showTutorial}
            xOffset={allowSkipLevelTutorial ? 100 : 0}
        >
            <FastForwardIcon fontSize="large" />
        </NiceButton>
    );
}

SkipLevelButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    nextLevel: PropTypes.func.isRequired,
}

export default SkipLevelButton;