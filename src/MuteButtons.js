import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";

export function MuteButtons({ musicMuted, toggleMuteMusic }) {
    return (
        <Stack direction="row" justifyContent="end" sx={{
            position: 'fixed',
            bottom: "1em",
            left: "1em",
        }}>
            <MuteButton
                muted={musicMuted}
                toggleMute={toggleMuteMusic}
                onIcon={(<MusicNoteIcon />)}
                offIcon={(<MusicOffIcon />)}
                title="music"
            />
            <MuteButton
                muted={musicMuted}
                toggleMute={toggleMuteMusic}
                onIcon={(<VolumeUpIcon />)}
                offIcon={(<VolumeOffIcon />)}
                title="sounds"
            />
        </Stack>);
}

function MuteButton({ muted, toggleMute, onIcon, offIcon, title }) {
    return (<>
        <Tooltip title={muted ? `Play ${title}` : `Mute ${title}`} placement="top-end" arrow>
            <IconButton
                onClick={toggleMute}
                color="secondary"
                size="medium"
            >
                {muted ? offIcon : onIcon}
            </IconButton>
        </Tooltip>
    </>);
}