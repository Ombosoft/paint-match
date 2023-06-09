import { Box, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useTutorial } from "../Tutorial";
import { useIsWide } from "../Util/ViewportDimensions";
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
    const isWide = useIsWide();
    const heightLost = isWide ? "8rem" : "19rem";
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
            <Box
                display="flex"
                flexGrow={1}
                flexDirection="column"
                justifyContent="center"
            >
                <MixPlate
                    diameter={`min(95vw, calc(70vh - ${heightLost}))`}
                    {...plateProps}
                />
            </Box>
            <ColorSliders
                level={curLevel}
                components={components}
                onSetComponentValue={setComponentValue}
            />
        </Stack>
    ) : (
        <RadiantButtons
            components={components}
            level={curLevel}
            diameter="min(95vw, 72vh)"
            innerExtendVW={2.5}
            onClick={handleClick}
            showBasicTutorial={showBasicTutorial}
        >
            <MixPlate diameter="min(60vw, 45vh)" {...plateProps} />
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
