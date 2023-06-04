import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import ColorCircle from "./ColorCircle";
import { HintBox } from "./HintBox";

function MixPlate({
    currentRGB,
    targetRGB,
    targetLevel,
    hint,
    showBasicTutorial,
    dropletColor,
    components,
    percentMatchText,
    distance,
}) {
    const diameter = "calc(50vh)";
    return (
        <Stack
            direction="row"
            sx={{ position: "relative", width: diameter, height: diameter }}
        >
            <ColorCircle
                isInner={false}
                diameter="100%"
                color={currentRGB}
                label={targetLevel.name}
                dropletColor={dropletColor}
                showDroplet
                tooltip={<HintBox hint={hint} />}
                showTooltip={hint !== null}
            />
            <ColorCircle
                isInner={true}
                diameter="60%"
                color={targetRGB}
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
    components: PropTypes.object.isRequired,
    percentMatchText: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
};

export default MixPlate;
