import UndoIcon from "@mui/icons-material/Undo";
import NiceButton from "./NiceButton";
import { useUndoSound } from "./Sfx";

export default function UndoButton({enabled, onClick}) {
    const [undoSound] = useUndoSound();

    function handleClick() {
        undoSound();
        onClick();
    }

    return (<NiceButton title="Undo" enabled={enabled} onClick={handleClick}>
        <UndoIcon fontSize="large" />
    </NiceButton>
    );
}