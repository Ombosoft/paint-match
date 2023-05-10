import { useLocalStorage } from "./LocalStorageHook";
import  { useCallback, useEffect, useState } from "react";


export default function useTutorial() {
    const maxRelevantResets = 3;
    const [showBasicTutorial, setShowBasicTutorial] = useLocalStorage("tutorial", true);
    const [resetCount, setResetCount] = useLocalStorage("reset-count", 0);
    const endBasicTutorial = useCallback(() => {
        setShowBasicTutorial(false);
    }, [setShowBasicTutorial]);

    function canShowReset(level, numDroplets) {
        if (resetCount > maxRelevantResets) {
            return;
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


    return [showBasicTutorial, endBasicTutorial, canShowReset, onResetColors];
}