import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export function MuteButton({ muted, toggleMute }) {
    return (<>
        <Tooltip title={muted ? "Play music" : "Mute music"} placement="top-end" arrow>
            <IconButton
                onClick={toggleMute}
                color="secondary"
                size="medium"
                sx={{ padding: "1em" }}>
                {muted ? (<MusicOffIcon fontSize="med" />) : (<MusicNoteIcon fontSize="med" />)}
            </IconButton>
        </Tooltip>
    </>);
}
