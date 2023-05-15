import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";

export function MuteButtons({ muted, toggleMute }) {
    return (
        <Stack direction="row" justifyContent="end" sx={{
            position: 'fixed',
            bottom: "0em",
            left: "0em",
        }}>
            <MuteButton muted={muted} toggleMute={toggleMute} />
        </Stack>);
}


function MuteButton({ muted, toggleMute }) {
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
