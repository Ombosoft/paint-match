import FastForwardIcon from "@mui/icons-material/FastForward";
import PropTypes from "prop-types";
import React from "react";
import useDisappearingState from "./DisappearingState";
import NiceButton from "./NiceButton";
import { useSkipSound } from "./Sfx";
import { useSkipLevelTutorial } from "./Tutorial";

// Button and tutorial
function SkipLevelButton({ enabled, goodEnough, nextLevel }) {
    const [allowSkipLevelTutorial, onSkipLevelUsed] = useSkipLevelTutorial();
    const showTutorial = useDisappearingState(
        allowSkipLevelTutorial && enabled && goodEnough
    );
    const skipSound = useSkipSound();

    function handleClick() {
        skipSound();
        onSkipLevelUsed();
        nextLevel();
    }

    return (
        <NiceButton
            title={
                allowSkipLevelTutorial && goodEnough ? (
                    <h1>Well done! Next level unlocked.</h1>
                ) : (
                    "Skip level"
                )
            }
            enabled={enabled}
            onClick={handleClick}
            forceTooltip={showTutorial}
            xOffset={allowSkipLevelTutorial && goodEnough ? 100 : 0}
        >
            <FastForwardIcon fontSize="large" />
        </NiceButton>
    );
}

SkipLevelButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    goodEnough: PropTypes.bool.isRequired,
    nextLevel: PropTypes.func.isRequired,
};

export default SkipLevelButton;
