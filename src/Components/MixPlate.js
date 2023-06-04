import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { animationDurationMs, dropletBlendDelay } from "../Constants";
import ColorCircle from "./ColorCircle";
import { HintBox } from "./HintBox";

function MixPlate({
    currentRGB,
    targetRGB,
    targetLevel,
    hint,
    showBasicTutorial,
    dropletColor,
}) {
    const diameter = "calc(50vh)";
    return (
        <Stack
            direction="row"
            sx={{ position: "relative", width: diameter, height: diameter }}
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
                tooltip={<HintBox hint={hint} />}
                showTooltip={hint !== null}
            />
            <ColorCircle
                inner
                diameter="60%"
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
    currentRGB: PropTypes.string.isRequired,
    targetRGB: PropTypes.string.isRequired,
    targetLevel: PropTypes.object.isRequired,
    hint: PropTypes.string,
    showBasicTutorial: PropTypes.bool.isRequired,
    dropletColor: PropTypes.string,
};

export default MixPlate;
