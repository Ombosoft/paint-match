import AppsIcon from "@mui/icons-material/Apps";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LevelsPanelContext } from "../Context/LevelsPanelContext";
import CaptionButton from "./CaptionButton";
import NiceButton from "./NiceButton";

function LevelsButton({ onClick, showCaption }) {
    const { setLevelsPanelOpen } = useContext(LevelsPanelContext);
    function handleClick() {
        if (onClick) {
            onClick();
        }
        setLevelsPanelOpen(true);
    }
    return showCaption ? (
        <CaptionButton
            id="levels-victory"
            onClick={handleClick}
            caption="Levels"
            captionColor="black"
        >
            <AppsIcon fontSize="large" />
        </CaptionButton>
    ) : (
        <NiceButton
            id="levels"
            title={"Choose level"}
            enabled={true}
            onClick={handleClick}
            forceTooltip={false}
        >
            <AppsIcon fontSize="large" />
        </NiceButton>
    );
}

LevelsButton.propTypes = {
    onClick: PropTypes.func,
    showCaption: PropTypes.bool,
    captionButtonStyle: PropTypes.bool,
};

export default LevelsButton;
