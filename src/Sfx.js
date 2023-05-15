import { Howl } from 'howler';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from "./LocalStorageHook";
import { randElement } from './Utils';

export const SoundsMutedContext = createContext(false);

export function useSoundControl() {
    const [muted, setMuted] = useLocalStorage("muteSounds", false);
    const toggleMute = useCallback(() => {
        const newMuted = !muted;
        setMuted(newMuted);
    }, [muted, setMuted]);
    return [muted, toggleMute];
}

export function useVictorySound() {
    return useHowl({
        src: '/sfx/victory.webm',
        volume: 0.4,
        rate: 1.0,
        sprite: null,
    });
}

export function useResetSound() {
    return useResetSfx(1.0);
}

export function useUndoSound() {
    return useResetSfx(2.0);
}

function useResetSfx(rate) {
    return useHowl({
        src: '/sfx/reset.webm',
        volume: 0.3,
        rate: rate,
    });
}

export function useSkipSound() {
    // Start and duration, ms
    const skipSprites = {
        '0': [30, 900],
        '1': [1960, 900],
        '2': [3890, 1140],
        '3': [5849, 900],
        '4': [7819, 900],
        '5': [11726, 985],
        '6': [15192, 856],
        '7': [20402, 981],
        '8': [22198, 871],
        '9': [23931, 681],
    };
    return useHowl({
        src: '/sfx/skip.webm',
        volume: 1.0,
        sprite: skipSprites,
    });
}

function playbackRate(numDroplets) {
    if (numDroplets <= 10) {
        return 0.55 + 0.05 * numDroplets;
    }
    if (numDroplets <= 50) {
        return playbackRate(10) + 0.02 * (numDroplets - 10);
    }
    return Math.min(2.6, playbackRate(50) + 0.003 * (numDroplets - 50));
}

export function useDropletSound(numDroplets) {
    // Start and duration, ms
    const dropletSprites = {
        '0': [140, 340],
        '1': [811, 480],
        '2': [1566, 490],
        '3': [2387, 410],
        '4': [3202, 520],
        '5': [4048, 425],
        '6': [4784, 430],
        '7': [5609, 640],
        '8': [6375, 425],
        '9': [7158, 393],
        '10': [7819, 483],
        '11': [8569, 513],
        '12': [10098, 555],
        '13': [10926, 358],
        '14': [12427, 438],
        '15': [13253, 375],
    };
    return useHowl({
        src: '/sfx/droplet.webm',
        volume: 0.6,
        rate: playbackRate(numDroplets),
        sprite: dropletSprites,
    });
}

function useHowl({ src, volume, rate, sprite }) {
    const muted = useContext(SoundsMutedContext);
    const [sound, setSound] = useState();
    // Have to use effect to prevent leaking. Howler keeps all created Howl instances.
    useEffect(() => {
        if (!sound) {
            setSound(new Howl({
                src: process.env.PUBLIC_URL + src,
                volume: volume,
                rate: rate,
                sprite: sprite,
            }));
            // console.log('Howl count', Howler._howls.length);
        }
        // There's no need to create more than one instance per sound.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const play = useCallback(() => {
        if (!sound) {
            return;
        }
        sound.stop();
        if (muted) {
            return;
        }
        if (sprite) {
            sound.play(randElement(Object.keys(sprite)));
        } else {
            sound.play();
        }
        if (rate) {
            sound.rate(rate);
        }
    }, [muted, sound, rate, sprite]);
    return play;
}
