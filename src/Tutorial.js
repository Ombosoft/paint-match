import { useCallback } from "react";
import { colorTable } from "./Levels";
import { useLocalStorage } from "./Util/LocalStorageHook";

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

export function useResetTutorial(numDroplets, level) {
    const [allow, onUsed] = useOneOffTutorial("tutorial-reset");
    const reallyAllow = allow && numDroplets > colorTable[level].cost * 3;
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

export function useHintTutorial() {
    return useOneOffTutorial("tutorial-hint");
}

export function useNotesTutorial() {
    return useOneOffTutorial("tutorial-notes");
}

function useOneOffTutorial(key) {
    const [allow, setAllow] = useLocalStorage(key, true);
    function onUsed() {
        setAllow(false);
    }
    return [allow, onUsed];
}
