import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { SoundsMutedContext } from "./Sfx";

export function MuteButtons({ musicMuted, toggleMuteMusic, toggleMuteSounds }) {
    const soundsMuted = useContext(SoundsMutedContext);
    return (
        <Stack
            direction="row"
            alignItems="center"
        >
            <MuteButton
                muted={musicMuted}
                toggleMute={toggleMuteMusic}
                onIcon={<MusicNoteIcon />}
                offIcon={<MusicOffIcon />}
                title="music"
            />
            <MuteButton
                muted={soundsMuted}
                toggleMute={toggleMuteSounds}
                onIcon={<VolumeUpIcon />}
                offIcon={<VolumeOffIcon />}
                title="sounds"
            />
            <Box flexGrow={1}/>
            <Box>Paint Match</Box>
        </Stack>
    );
}

function MuteButton({ muted, toggleMute, onIcon, offIcon, title }) {
    return (
        <>
            <Tooltip
                title={muted ? `Play ${title}` : `Mute ${title}`}
                placement="top-end"
                arrow
            >
                <IconButton
                    onClick={toggleMute}
                    color="secondary"
                    size="medium"
                >
                    {muted ? offIcon : onIcon}
                </IconButton>
            </Tooltip>
        </>
    );
}

MuteButtons.prototypes = {
    musicMuted: PropTypes.bool.isRequired,
    toggleMuteMusic: PropTypes.func.isRequired,
    toggleMuteSounds: PropTypes.func.isRequired,
};
