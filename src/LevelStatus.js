import { useCallback } from "react";
import { useLocalStorage } from "./Util/LocalStorageHook";

export const levelAchievementThreshold = 1;
export const levelAchievementWon = 2;
export const levelAchievementPerfect = 3;

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

    const onLevelAchievement = useCallback(
        (level, levelAchievement) => {
            if (levelAchievement <= stars(levelAchievements[level])) {
                return;
            }
            setLevelAchievements((prev) => {
                let newState = { ...prev };
                newState[level] = { won: true };
                return newState;
            });
        },
        [levelAchievements, setLevelAchievements]
    );

    return [
        curLevel,
        setCurLevelCallback,
        unlockedLevel,
        unlockLevel,
        levelAchievements,
        onLevelAchievement,
    ];
}

// TODO use this in getter
function stars(levelAchievements) {
    if (levelAchievements.stars) {
        return levelAchievements.stars;
    }
    if (levelAchievements.won) {
        // migration
        return 2;
    }
    return 0;
}
