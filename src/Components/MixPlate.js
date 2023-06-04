import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { blendPaints } from "../Colors";
import ColorSquare from "./ColorSquare";
import { HintBox } from "./HintBox";

function MixPlate({
    debug,
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
    return (
        <Stack direction="row" flexGrow={1} sx={{position: "relative"}}>
            <ColorSquare
                isInner={false}
                color={targetRGB}
                label={
                    debug
                        ? `${targetLevel.name}  (${targetLevel.cmyk})`
                        : targetLevel.name
                }
                showColor={debug}
                tooltip="Target color"
                showTooltip={showBasicTutorial}
            />
            <ColorSquare
                isInner={true}
                color={currentRGB}
                label={
                    debug
                        ? `d${distance.toFixed(2)} (${blendPaints(components)})`
                        : percentMatchText
                }
                showColor={debug}
                dropletColor={dropletColor}
                showDroplet
                tooltip={<HintBox hint={hint} />}
                showTooltip={hint !== null}
            />
        </Stack>
    );
}

MixPlate.propTypes = {
    debug: PropTypes.bool.isRequired,
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
