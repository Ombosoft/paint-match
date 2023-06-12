import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useTutorial } from "../Tutorial";
import ColorSliders from "./ColorSliders";
import MixPlate from "./MixPlate";
import RadiantButtons from "./RadiantButtons";

function GameContent({
    components,
    curLevel,
    victory,
    sliderMode,
    targetLevel,
    currentRGB,
    targetRGB,
    dropletColor,
    onClick,
    setComponentValue,
}) {
    const [showBasicTutorial, endBasicTutorial] = useTutorial();
    function handleClick(color) {
        endBasicTutorial();
        onClick(color);
    }
    return (
        <>
            <RadiantButtons
                components={components}
                level={curLevel}
                diameter="min(95vw, 78vh)"
                innerExtendVW={2.5}
                onClick={handleClick}
                showBasicTutorial={showBasicTutorial}
            >
                <MixPlate
                    diameter="min(60vw, 48vh)"
                    currentRGB={currentRGB}
                    targetRGB={targetRGB}
                    targetLevel={targetLevel}
                    showBasicTutorial={showBasicTutorial}
                    dropletColor={dropletColor}
                    victory={victory}
                />
            </RadiantButtons>

            {sliderMode && (
                <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
                    <ColorSliders
                        level={curLevel}
                        components={components}
                        onSetComponentValue={setComponentValue}
                    />
                </Box>
            )}
        </>
    );
}

GameContent.propTypes = {
    components: PropTypes.object.isRequired,
    curLevel: PropTypes.number.isRequired,
    victory: PropTypes.bool,
    sliderMode: PropTypes.bool,
    targetLevel: PropTypes.object.isRequired,
    currentRGB: PropTypes.string.isRequired,
    targetRGB: PropTypes.string.isRequired,
    dropletColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    setComponentValue: PropTypes.func.isRequired,
};

export default GameContent;
