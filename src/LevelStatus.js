import { useCallback } from "react";
import { useLocalStorage } from "./LocalStorageHook";

export default function useLevelStatus() {
    const [curLevel, setCurLevel] = useLocalStorage("level", 0);
    const [unlockedLevelRaw, setUnlockedLevel] = useLocalStorage("level-unlocked", 0);

    // Migration
    if (unlockedLevelRaw < curLevel) {
        setUnlockedLevel(curLevel);
    }
    const unlockedLevel = Math.max(curLevel, unlockedLevelRaw);
    // end migration

    const unlockLevel = useCallback((level)=>{
        if (level > unlockedLevel) {
            setUnlockedLevel(level);
        }
    }, [setUnlockedLevel, unlockedLevel]);
    
    const setCurLevelCallback = useCallback((level) => {
        unlockLevel(level);
        setCurLevel(level);
    }, [setCurLevel, unlockLevel]);
    
    return [curLevel, setCurLevelCallback, unlockedLevel, unlockLevel];
}