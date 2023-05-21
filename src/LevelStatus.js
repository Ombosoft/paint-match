import { useCallback } from "react";
import { useLocalStorage } from "./Util/LocalStorageHook";

export default function useLevelStatus() {
    const [curLevel, setCurLevel] = useLocalStorage("level", 0);
    const [unlockedLevelRaw, setUnlockedLevel] = useLocalStorage(
        "level-unlocked",
        0
    );
    const [levelAchievements, setLevelAchievements] = useLocalStorage(
        "level-achievements",
        {}
    );

    // Migration
    if (unlockedLevelRaw < curLevel) {
        setUnlockedLevel(curLevel);
    }
    const unlockedLevel = Math.max(curLevel, unlockedLevelRaw);
    // end migration

    const unlockLevel = useCallback(
        (level) => {
            if (level > unlockedLevel) {
                setUnlockedLevel(level);
            }
        },
        [setUnlockedLevel, unlockedLevel]
    );

    const setCurLevelCallback = useCallback(
        (level) => {
            unlockLevel(level);
            setCurLevel(level);
        },
        [setCurLevel, unlockLevel]
    );

    const onLevelWon = useCallback(
        (level) => {
            setLevelAchievements((prev) => {
                let newState = { ...prev };
                newState[level] = { won: true };
                return newState;
            });
        },
        [setLevelAchievements]
    );

    return [
        curLevel,
        setCurLevelCallback,
        unlockedLevel,
        unlockLevel,
        levelAchievements,
        onLevelWon,
    ];
}
