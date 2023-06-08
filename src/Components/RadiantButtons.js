import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { minLevels } from "../Colors";
import { filterKeys, mapValues } from "../Util/Utils";
import useViewportWidth from "../Util/ViewportDimensions";
import PaletteChart from "./PaletteChart";

const zeroValue = 2;

function RadiantButtons({
    components,
    level,
    diameter,
    innerExtendVW,
    onClick,
    children,
}) {
    const viewportWidth = useViewportWidth();
    const filtered = filterKeys(components, color => level >= minLevels[color])
    const data = mapValues(filtered, (x) => x + zeroValue);
    return (
        <Box width="100%" height={diameter} sx={{ position: "relative" }}>
            <PaletteChart
                width="100%"
                height="100%"
                margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
                startAngle={0}
                background="transparent"
                innerRadius={0.7}
                activeInnerRadiusOffset={(innerExtendVW * viewportWidth) / 100}
                components={data}
                onClick={onClick}
                valueToLabelMapper={(x) => x - zeroValue}
            />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                sx={{
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

RadiantButtons.propTypes = {
    components: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired,
    diameter: PropTypes.string.isRequired,
    innerExtendVW: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default RadiantButtons;
