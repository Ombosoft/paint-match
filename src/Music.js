import Checkbox from '@mui/material/Checkbox';
import { Howl } from 'howler';
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLocalStorage } from "./LocalStorageHook";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { IconButton, Tooltip } from "@mui/material";
import { musicVolume } from './Constants';

// Music hook, returns mute button and autoplay callback to be called 
// when interaction with the app started.
function useMusic() {
    const [muted, setMuted] = useLocalStorage("muteMusic", false);
    // persist Howl sound instance between renders
    const sound = useRef();

    useEffect(() => {
        if (!sound.current) {
            const newSound = new Howl({
                src: ['/music/bossa-nova-tokyo.webm'],
                onend: () => {
                    if (muted) {
                        return;
                    }
                    // Loop or change track (todo)
                    sound.current.play();
                },
                volume: musicVolume,
            });
            sound.current = newSound;
        }
    });
    const toggleMute = (event) => {
        const newMuted = !muted;
        setMuted(newMuted);
        if (newMuted) {
            sound.current.stop();
        } else {
            sound.current.play();
        }
    };
    // Mute button to place where appropriate on the screen
    const MuteButton = useCallback(() => (<>
        <Tooltip title={muted ? "Play music" : "Mute music"} placement="top-end" arrow>
            <IconButton
                onClick={toggleMute}
                color="secondary"
                size="medium"
                sx={{padding: "1em"}}>
                {muted ? (<MusicOffIcon fontSize="med" />) : (<MusicNoteIcon fontSize="med" />)}
            </IconButton>
        </Tooltip>
    </>));
    // Callback that starts music when the app is ready
    const autoPlay = useCallback(() => {
        if (muted || sound.current.playing()) {
            return;
        }
        sound.current.play();
    }, [muted]);
    return [MuteButton, autoPlay];
};

export default useMusic;