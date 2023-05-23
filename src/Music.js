import { Howl } from "howler";
import { useCallback, useEffect, useRef } from "react";
import { musicFadeDurationMs, musicVolume } from "./Constants";
import { useLocalStorage } from "./Util/LocalStorageHook";
import { mapValues } from "./Util/Utils";

const musicPrefix = process.env.PUBLIC_URL + "/music/";
const trackFiles = {
    0: "paint_match_1.mp3",
    6: "paint_match_2.mp3",
    14: "paint_match_3.mp3",
    27: "paint_match_4.mp3",
};

// Music hook, returns mute button and autoplay callback to be called
// when interaction with the app started.
function useMusic() {
    const [muted, setMuted] = useLocalStorage("muteMusic", false);
    // persist Howl sound instance between renders
    const sound = useRef();
    const tracks = useRef();
    const mutedRef = useRef(muted);
    const curLevel = useRef(0);

    useEffect(() => {
        mutedRef.current = muted; // refresh muted flag so it's visible in onend callback
    }, [muted]);

    const onEnd = useCallback(() => {
        if (mutedRef.current) {
            return;
        }
        const nextTrackKey = maxLessThanOrEquals(Object.keys(trackFiles), curLevel.current);
        const nextTrack = tracks.current[nextTrackKey];
        if (!nextTrack) {
            console.warn("no next track for level", curLevel.current);
            return;
        }
        sound.current = nextTrack;
        sound.current.play();
        console.log("play", sound.current._src);
    }, []);

    useEffect(() => {
        if (!tracks.current) {
            tracks.current = mapValues(
                trackFiles,
                (fileName) =>
                    new Howl({
                        src: [musicPrefix + fileName],
                        onend: onEnd,
                        volume: musicVolume,
                    })
            );
        }
        if (!sound.current) {
            sound.current = tracks.current[0];
        }
    }, [onEnd, sound]);
    const toggleMute = useCallback(() => {
        const newMuted = !muted;
        setMuted(newMuted);
        if (newMuted) {
            sound.current.fade(musicVolume, 0, musicFadeDurationMs);
        } else {
            if (!sound.current.playing()) {
                sound.current.play();
            }
            sound.current.fade(0, musicVolume, musicFadeDurationMs);
        }
    }, [muted, setMuted]);
    // Callback that starts music when the app is ready
    const autoPlay = useCallback(() => {
        if (muted || sound.current.playing()) {
            return;
        }
        sound.current.play();
    }, [muted, sound]);
    const onChangeLevel = (level) => {
        curLevel.current = level;
    };
    return [muted, toggleMute, autoPlay, onChangeLevel];
}

function maxLessThanOrEquals(arr, val) {
    return Math.max(...arr.filter(x => x <= val))
}

export default useMusic;
