import useSound from 'use-sound';

export function useVictorySound() {
    return useSound(process.env.PUBLIC_URL + '/sfx/victory.webm', {volume: 0.6});
}