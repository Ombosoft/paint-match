import { Box, Stack } from "@mui/material";
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
    const plateProps = {
        currentRGB: currentRGB,
        targetRGB: targetRGB,
        targetLevel: targetLevel,
        showBasicTutorial: showBasicTutorial,
        dropletColor: dropletColor,
        victory: victory,
    };
    return sliderMode ? (
        <Stack
            flexGrow={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <MixPlate diameter="min(45vw, 38vh)" {...plateProps} />
            <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
                <ColorSliders
                    level={curLevel}
                    components={components}
                    onSetComponentValue={setComponentValue}
                />
            </Box>
        </Stack>
    ) : (
        <RadiantButtons
            components={components}
            level={curLevel}
            diameter="min(95vw, 78vh)"
            innerExtendVW={2.5}
            onClick={handleClick}
            showBasicTutorial={showBasicTutorial}
        >
            <MixPlate diameter="min(60vw, 48vh)" {...plateProps} />
        </RadiantButtons>
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
