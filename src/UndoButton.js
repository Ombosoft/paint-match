import UndoIcon from "@mui/icons-material/Undo";
import { useContext } from "react";
import NiceButton from "./NiceButton";
import { SoundsMutedContext, useUndoSound } from "./Sfx";

export default function UndoButton({enabled, onClick}) {
    const soundsMuted = useContext(SoundsMutedContext);
    const undoSound = useUndoSound(soundsMuted);

    function handleClick() {
        undoSound();
        onClick();
    }

    return (<NiceButton title="Undo" enabled={enabled} onClick={handleClick}>
        <UndoIcon fontSize="large" />
    </NiceButton>
    );
}