import AppsIcon from "@mui/icons-material/Apps";
import { Box, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LevelsPanelContext } from "../Context/LevelsPanelContext";
import NiceButton from "./NiceButton";

function LevelsButton({ onClick, showCaption }) {
    const { setLevelsPanelOpen } = useContext(LevelsPanelContext);
    function handleClick() {
        if (onClick) {
            onClick();
        }
        setLevelsPanelOpen(true);
    }
    return (
        <NiceButton
            id="levels"
            title={"Choose level"}
            enabled={true}
            onClick={handleClick}
            forceTooltip={false}
        >
            <Stack direction="column" alignItems="center">
                <AppsIcon fontSize="large" />
                {showCaption && <Box sx={{ fontSize: "1rem" }}>Levels</Box>}
            </Stack>
        </NiceButton>
    );
}

LevelsButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    showCaption: PropTypes.bool,
};

export default LevelsButton;
