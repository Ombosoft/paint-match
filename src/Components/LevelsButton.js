import AppsIcon from "@mui/icons-material/Apps";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { LevelsPanelContext } from "../Context/LevelsPanelContext";

export default function LevelsButton({ onClick }) {
    const { setLevelsPanelOpen } = useContext(LevelsPanelContext);
    function handleClick() {
        if (onClick) {
            onClick();
        }
        setLevelsPanelOpen(true);
    }
    return (
        <IconButton color="secondary" onClick={handleClick}>
            <AppsIcon fontSize="large" />
        </IconButton>
    );
}
