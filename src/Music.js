import { Howl } from "howler";
import { useCallback, useEffect, useRef } from "react";
import { musicFadeDurationMs, musicVolume } from "./Constants";
import { useLocalStorage } from "./Util/LocalStorageHook";

// Music hook, returns mute button and autoplay callback to be called
// when interaction with the app started.
function useMusic() {
    const [muted, setMuted] = useLocalStorage("muteMusic", false);
    // persist Howl sound instance between renders
    const sound = useRef();
    const mutedRef = useRef(muted);

    useEffect(() => {
        mutedRef.current = muted; // refresh muted flag so it's visible in onend callback
    }, [muted]);

    useEffect(() => {
        if (!sound.current) {
            const newSound = new Howl({
                src: [process.env.PUBLIC_URL + "/music/bossa-nova-tokyo.webm"],
                onend: () => {
                    if (mutedRef.current) {
                        return;
                    }
                    // Loop or change track (todo)
                    sound.current.play();
                },
                volume: musicVolume,
            });
            sound.current = newSound;
        }
    }, [sound]);
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
    return [muted, toggleMute, autoPlay];
}

export default useMusic;
