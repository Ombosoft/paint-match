import { Howl } from "howler";
import { useCallback, useEffect, useRef } from "react";
import { musicFadeDurationMs, musicRate, musicVolume } from "./Constants";
import { useLocalStorage } from "./Util/LocalStorageHook";
import { mapValues } from "./Util/Utils";

const musicPrefix = process.env.PUBLIC_URL + "/music/";
const trackConfig = {
    0: {
        loop: "paint_match_1.mp3",
    },
    12: {
        loop: "paint_match_2.mp3",
    },
    24: {
        loop: "paint_match_3.mp3",
    },
    36: {
        loop: "paint_match_4.mp3",
    },
    50: {
        transition: "paint_match_4.5.mp3",
        loop: "paint_match_5.mp3",
    },
};

// Music hook, returns mute button and autoplay callback to be called
// when interaction with the app started.
function useMusic() {
    const [muted, setMuted] = useLocalStorage("muteMusic", false);
    // persist Howl sound instance between renders
    const jukebox = useRef();
    const tracks = useRef();
    const mutedRef = useRef(muted);
    const curLevel = useRef(0);

    useEffect(() => {
        mutedRef.current = muted; // refresh muted flag so it's visible in onend callback
    }, [muted]);

    // State machine
    const onEnd = useCallback(() => {
        if (mutedRef.current) {
            return;
        }
        const nextTrackKey = maxLessThanOrEquals(
            Object.keys(trackConfig),
            curLevel.current
        );
        const nextTrack = tracks.current[nextTrackKey];
        if (!nextTrack) {
            console.warn("no next track for level", curLevel.current);
            return;
        }
        jukebox.current.sound = nextTrackKey !== jukebox.current.trackId ? (nextTrack.transition ?? nextTrack.loop) : nextTrack.loop;
        jukebox.current.trackId = nextTrackKey;
        jukebox.current.sound.play();
        console.log("play", jukebox.current.sound._src, {nextTrackKey});
    }, []);

    // Initialize everything
    useEffect(() => {
        if (!tracks.current) {
            tracks.current = mapValues(trackConfig, (item) =>
                mapValues(
                    item,
                    (fileName) =>
                        new Howl({
                            src: [musicPrefix + fileName],
                            onend: onEnd,
                            volume: musicVolume,
                            rate: musicRate,
                        })
                )
            );
        }
        if (!jukebox.current) {
            jukebox.current = {
                sound: tracks.current[0].loop,
                trackId: 0,
            };
        }
    }, [onEnd, jukebox]);

    // Callback exposed to the mute button
    const toggleMute = useCallback(() => {
        const newMuted = !muted;
        setMuted(newMuted);
        if (newMuted) {
            jukebox.current.sound.fade(musicVolume, 0, musicFadeDurationMs);
        } else {
            if (!jukebox.current.sound.playing()) {
                jukebox.current.sound.play();
            }
            jukebox.current.sound.fade(0, musicVolume, musicFadeDurationMs);
        }
    }, [muted, setMuted]);

    // Callback that starts music when the app is ready
    const autoPlay = useCallback(() => {
        if (muted || jukebox.current.sound.playing()) {
            return;
        }
        jukebox.current.sound.play();
    }, [muted, jukebox]);

    // Game story control
    const onChangeLevel = (level) => {
        // console.log({level})
        curLevel.current = level;
    };
    return [muted, toggleMute, autoPlay, onChangeLevel];
}

function maxLessThanOrEquals(arr, val) {
    return Math.max(...arr.filter((x) => x <= val));
}

export default useMusic;
