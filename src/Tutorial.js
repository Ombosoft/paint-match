import { useCallback } from "react";
import { useLocalStorage } from "./LocalStorageHook";


export function useTutorial() {
    const [showBasicTutorial, setShowBasicTutorial] = useLocalStorage("tutorial", true);
    const endBasicTutorial = useCallback(() => {
        setShowBasicTutorial(false);
    }, [setShowBasicTutorial]);

    return [showBasicTutorial, endBasicTutorial];
}

export function useResetTutorial() {
    const maxRelevantResets = 3;
    const [resetCount, setResetCount] = useLocalStorage("reset-count", 0);
    function canShowReset(level, numDroplets) {
        if (resetCount > maxRelevantResets) {
            return false;
        }
        if (level < 60) {
            return numDroplets > 20;
        }
        return numDroplets > 40;
    }

    function onResetColors() {
        if (resetCount > maxRelevantResets) {
            return;
        }
        setResetCount((prev) => prev + 1);
    }
    return [canShowReset, onResetColors];
}

export function useSkipLevelTutorial() {
    return useOneOffTutorial("tutorial-skip-level");
}

export function useSlidersTutorial() {
    return useOneOffTutorial("tutorial-sliders");
}

function useOneOffTutorial(key) {
    const [allow, setAllow] = useLocalStorage(key, true);
    function onUsed() {
        setAllow(false);
    }
    return [allow, onUsed];
}