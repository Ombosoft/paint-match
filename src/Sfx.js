import { createContext, useCallback } from 'react';
import useSound from 'use-sound';
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
    return useSound(process.env.PUBLIC_URL + '/sfx/victory.webm', {
        volume: 0.4,
    });
}

export function useResetSound() {
    return useResetSfx(1.0);
}

export function useUndoSound() {
    return useResetSfx(2.0);
}

function useResetSfx(rate) {
    return useSound(process.env.PUBLIC_URL + '/sfx/reset.webm', {
        volume: 0.3,
        playbackRate: rate,
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
    const [sprites] = useSound(process.env.PUBLIC_URL + '/sfx/skip.webm', {
        volume: 1.0,
        interrupt: true,
        sprite: skipSprites,
    });
    const play = () => {
        sprites({ id: randElement(Object.keys(skipSprites)) });
    };
    return [play];
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

export function useDropletSound(numDroplets, muted) {
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
    const [sprites] = useSound(process.env.PUBLIC_URL + '/sfx/droplet.webm', {
        volume: 0.6,
        interrupt: true,
        playbackRate: playbackRate(numDroplets),
        soundEnabled: !muted,
        sprite: dropletSprites,
    });
    const play = () => {
        sprites({ id: randElement(Object.keys(dropletSprites)) });
    };
    return [play];
}