import { useCallback } from "react";
import { useLocalStorage } from "./Util/LocalStorageHook";
import { mapValues } from "./Util/Utils";

export const levelAchievementThreshold = 1;
export const levelAchievementWon = 2;
export const levelAchievementPerfect = 3;

export function useLevelStatus() {
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
            if (levelAchievement <= stars(levelAchievements[level]) && !levelAchievements[level].won) {
                return;
            }
            setLevelAchievements((prev) => {
                let newState = { ...prev };
                newState[level] = { stars: levelAchievement };
                return newState;
            });
        },
        [levelAchievements, setLevelAchievements]
    );

    const levelStars = mapValues(levelAchievements, la => stars(la));

    return [
        curLevel,
        setCurLevelCallback,
        unlockedLevel,
        unlockLevel,
        levelStars,
        onLevelAchievement,
    ];
}

function stars(levelAchievements) {
    if (!levelAchievements) {
        return 0;
    }
    if (levelAchievements.stars) {
        return levelAchievements.stars;
    }
    if (levelAchievements.won) {
        // migration
        return 2;
    }
    return 0;
}
