import UndoIcon from "@mui/icons-material/Undo";
import { useUndoSound } from "../Sfx";
import NiceButton from "./NiceButton";

export default function UndoButton({ enabled, onClick }) {
    const undoSound = useUndoSound();

    function handleClick() {
        undoSound();
        onClick();
    }

    return (
        <NiceButton
            id="undo"
            title="Undo"
            enabled={enabled}
            onClick={handleClick}
        >
            <UndoIcon fontSize="large" />
        </NiceButton>
    );
}
