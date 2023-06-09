import { Howl } from "howler";
import { useCallback, useEffect, useRef } from "react";
import { musicFadeDurationMs, musicRate, musicVolume } from "./Constants";
import { useLocalStorage } from "./Util/LocalStorageHook";
import { usePageVisibility } from "./Util/PageVisibility";
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
    const isVisible = usePageVisibility();
    // persist Howl sound instance between renders
    const jukebox = useRef();
    const tracks = useRef();
    const canPlay = useRef(isVisible && !muted);
    const curLevel = useRef(0);

    const playSafe = useCallback(
        (fn) => {
            try {
                if (!jukebox.current || !jukebox.current.sound) {
                    return;
                }
                fn(jukebox.current.sound);
            } catch (ex) {
                console.warn("Failed to call sound", ex);
            }
        },
        [jukebox]
    );
    const playPause = useCallback(
        (shouldPlay) => {
            if (shouldPlay) {
                if (!jukebox.current.sound.playing()) {
                    playSafe((sound) => sound.play());
                }
                playSafe((sound) =>
                    sound.fade(0, musicVolume, musicFadeDurationMs)
                );
            } else {
                playSafe((sound) =>
                    sound.fade(musicVolume, 0, musicFadeDurationMs)
                );
            }
        },
        [playSafe]
    );
    useEffect(() => {
        const prev = canPlay.current;
        canPlay.current = isVisible && !muted; // refresh muted flag so it's visible in onend callback
        if (prev !== canPlay.current) {
            playPause(canPlay.current);
        }
    }, [isVisible, muted, playPause]);

    // State machine
    const onEnd = useCallback(() => {
        if (!canPlay.current) {
            return;
        }
        const nextTrackKey = chooseNextTrack(
            Object.keys(trackConfig),
            jukebox.current.trackId,
            curLevel.current
        );
        const nextTrack = tracks.current[nextTrackKey];
        if (!nextTrack) {
            console.warn("no next track for level", curLevel.current);
            return;
        }
        jukebox.current.sound =
            nextTrackKey !== jukebox.current.trackId
                ? nextTrack.transition ?? nextTrack.loop
                : nextTrack.loop;
        jukebox.current.trackId = nextTrackKey;
        playSafe((sound) => sound.play());
        console.log("play", jukebox.current.sound._src, { nextTrackKey });
    }, [playSafe]);

    // Initialize everything
    useEffect(() => {
        if (!tracks.current) {
            tracks.current = mapValues(trackConfig, (item) =>
                mapValues(item, (fileName) => {
                    try {
                        return new Howl({
                            src: [musicPrefix + fileName],
                            onend: onEnd,
                            volume: musicVolume,
                            rate: musicRate,
                            autoSuspend: false,
                        });
                    } catch (ex) {
                        console.warn("Failed to create Howl", ex);
                        return null;
                    }
                })
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
    }, [muted, setMuted]);

    // Callback that starts music when the app is ready
    const autoPlay = useCallback(() => {
        if (muted || jukebox.current.sound.playing()) {
            return;
        }
        playSafe((sound) => sound.play());
    }, [muted, playSafe]);

    // Game story control
    const onChangeLevel = (level) => {
        curLevel.current = level;
    };
    return [muted, toggleMute, autoPlay, onChangeLevel];
}

function chooseNextTrack(trackIds, curId, levelNum) {
    const desiredId = Math.max(...trackIds.filter((x) => x <= levelNum));
    if (curId >= desiredId) {
        return desiredId;
    }
    return Math.min(...trackIds.filter((x) => x <= desiredId && x > curId));
}

export default useMusic;
