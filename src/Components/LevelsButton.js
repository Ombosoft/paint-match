import AppsIcon from "@mui/icons-material/Apps";
import { useContext } from "react";
import { LevelsPanelContext } from "../Context/LevelsPanelContext";
import NiceButton from "./NiceButton";

export default function LevelsButton({ onClick }) {
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
            <AppsIcon fontSize="large" />
        </NiceButton>
    );
}
