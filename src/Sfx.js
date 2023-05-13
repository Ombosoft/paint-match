import useSound from 'use-sound';
import { randElement } from './Utils';

export function useVictorySound() {
    return useSound(process.env.PUBLIC_URL + '/sfx/victory.webm', {volume: 0.4});
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
        sprites({id: randElement(Object.keys(skipSprites))});
    };
    return [play];
}