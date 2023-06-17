import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { textForeground } from "../Constants";
import { gaButton } from "../GA";
import { SoundsMutedContext } from "../Sfx";

export function MuteButtons({ musicMuted, toggleMuteMusic, toggleMuteSounds }) {
    const soundsMuted = useContext(SoundsMutedContext);
    return (
        <Stack
            direction="row"
            alignItems="center"
            marginLeft="1em"
            marginRight="1em"
            marginTop="-5vmin"
        >
            <MuteButton
                id="mute_music"
                muted={musicMuted}
                toggleMute={toggleMuteMusic}
                onIcon={<MusicNoteIcon />}
                offIcon={<MusicOffIcon />}
                title="music"
            />
            <MuteButton
                id="mute_sounds"
                muted={soundsMuted}
                toggleMute={toggleMuteSounds}
                onIcon={<VolumeUpIcon />}
                offIcon={<VolumeOffIcon />}
                title="sounds"
            />
            <Box flexGrow={1} />
            <Box
                sx={{
                    fontSize: "6vmin",
                    fontWeight: "bold",
                    color: textForeground,
                }}
            >
                Paint Match
            </Box>
        </Stack>
    );
}

function MuteButton({ id, muted, toggleMute, onIcon, offIcon, title }) {
    function handleClick() {
        toggleMute();
        gaButton(id);
    }
    return (
        <>
            <Tooltip
                title={muted ? `Play ${title}` : `Mute ${title}`}
                placement="top-end"
                arrow
            >
                <IconButton
                    onClick={handleClick}
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
