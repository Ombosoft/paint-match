import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { animationDurationMs, dropletBlendDelay } from "../Constants";
import ColorCircle from "./ColorCircle";

function MixPlate({
    diameter,
    currentRGB,
    targetRGB,
    targetLevel,
    showBasicTutorial,
    dropletColor,
    victory,
}) {
    return (
        <Stack
            id="MixPlate"
            direction="row"
            sx={{
                position: "relative",
                width: diameter,
                height: diameter,
            }}
        >
            <ColorCircle
                diameter="100%"
                animationDuration={
                    dropletColor !== undefined
                        ? dropletBlendDelay
                        : animationDurationMs - dropletBlendDelay
                }
                color={dropletColor !== undefined ? dropletColor : currentRGB}
            />
            <ColorCircle
                inner
                diameter="90%"
                animationDuration={animationDurationMs}
                color={currentRGB}
            />
            <ColorCircle
                inner
                diameter="60%"
                labelWidth={diameter}
                labelFontSize={victory ? "9vmin" : "4vmin"}
                animationDuration={animationDurationMs}
                color={targetRGB}
                label={targetLevel.name}
                tooltip="Target color"
                showTooltip={showBasicTutorial}
            />
        </Stack>
    );
}

MixPlate.propTypes = {
    diameter: PropTypes.string.isRequired,
    currentRGB: PropTypes.string.isRequired,
    targetRGB: PropTypes.string.isRequired,
    targetLevel: PropTypes.object.isRequired,
    showBasicTutorial: PropTypes.bool.isRequired,
    dropletColor: PropTypes.string,
    victory: PropTypes.bool,
};

export default MixPlate;
