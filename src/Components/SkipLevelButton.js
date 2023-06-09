import FastForwardIcon from "@mui/icons-material/FastForward";
import PropTypes from "prop-types";
import React from "react";
import { useSkipSound } from "../Sfx";
import { useSkipLevelTutorial } from "../Tutorial";
import useDisappearingState from "../Util/DisappearingState";
import NiceButton from "./NiceButton";

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
            id="skip"
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
