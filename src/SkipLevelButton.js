import FastForwardIcon from "@mui/icons-material/FastForward";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import NiceButton from "./NiceButton";
import { useSkipSound } from "./Sfx";
import { useSkipLevelTutorial } from "./Tutorial";

// Button and tutorial
function SkipLevelButton({ enabled, nextLevel }) {
    const [allowSkipLevelTutorial, onSkipLevelUsed] = useSkipLevelTutorial();
    const [showTutorial, setShowTutorial] = useState(false);
    const skipSound = useSkipSound();
    useEffect(() => {
        if (allowSkipLevelTutorial && enabled) {
            setShowTutorial(true);
            const timerId = setTimeout(() => {
                console.log('effect off');
                setShowTutorial(false);
            }, 3000); // Delay hide tooltip 

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [allowSkipLevelTutorial, enabled]);

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
            xOffset={showTutorial ? 100 : 0}
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