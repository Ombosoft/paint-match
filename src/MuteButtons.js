import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton, Stack, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { SoundsMutedContext } from './Sfx';

export function MuteButtons({ musicMuted, toggleMuteMusic, toggleMuteSounds }) {
    const soundsMuted = useContext(SoundsMutedContext);
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
                muted={soundsMuted}
                toggleMute={toggleMuteSounds}
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