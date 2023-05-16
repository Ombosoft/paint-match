import { useCallback } from "react";
import { useLocalStorage } from "./LocalStorageHook";

export function useTutorial() {
    const [showBasicTutorial, setShowBasicTutorial] = useLocalStorage(
        "tutorial",
        true
    );
    const endBasicTutorial = useCallback(() => {
        setShowBasicTutorial(false);
    }, [setShowBasicTutorial]);

    return [showBasicTutorial, endBasicTutorial];
}

export function useResetTutorial(numDroplets) {
    const [allow, onUsed] = useOneOffTutorial("tutorial-reset");
    const reallyAllow = allow && numDroplets > 10;
    const onUsedCallback = useCallback(() => {
        if (!reallyAllow) {
            return;
        }
        onUsed();
    }, [onUsed, reallyAllow]);
    return [reallyAllow, onUsedCallback];
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
