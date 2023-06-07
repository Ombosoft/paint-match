import { Box, Stack } from "@mui/material";
import convert from "color-convert";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import colorDistance from "../ColorDistance";
import {
    blendPaints,
    cmykColors,
    firstLevelWithAllColors,
    getWinTolerance,
    isPerfectVictory,
    levelRGB,
    zeroComponents,
} from "../Colors";
import {
    animationDurationMs,
    dropletBlendDelay,
    dropletsUntilReset,
    extraCommitDelay,
} from "../Constants";
import { LevelsPanelContext } from "../Context/LevelsPanelContext";
import { NumDropletsContext } from "../Context/NumDropletsContext";
import { optimalSolution } from "../GameAI";
import { formatHint, generateHint } from "../HintGenerator";
import {
    levelAchievementPerfect,
    levelAchievementThreshold,
    levelAchievementWon,
    useLevelStatus,
} from "../LevelStatus";
import { colorTable } from "../Levels";
import { useTutorial } from "../Tutorial";
import { distanceToPercentMatch, randomLevel } from "../Util/Utils";
import { vecCompSum } from "../Util/Vec";
import AppTitle from "./AppTitle";
import ColorSliders from "./ColorSliders";
import HintButton from "./HintButton";
import LevelsButton from "./LevelsButton";
import LevelsPanel from "./LevelsPanel";
import MixPlate from "./MixPlate";
import NotesButton from "./NotesButton";
import RadiantButtons from "./RadiantButtons";
import ResetButton from "./ResetButton";
import SkipLevelButton from "./SkipLevelButton";
import SlidersButton from "./SlidersButton";
import UndoButton from "./UndoButton";
import VictoryPanel from "./VictoryPanel";

function Game({ autoPlayMusic, onChangeLevel }) {
    const [victory, setVictory] = useState(false);
    const [bottle, setBottle] = useState(true);

    const [components, setComponents] = useState(zeroComponents);
    const [prevComponents, setPrevComponents] = useState([]);
    const [dropletColor, setDropletColor] = useState();

    const [
        curLevel,
        setCurLevel,
        unlockedLevel,
        unlockLevel,
        levelAchievements,
        onLevelAchievement,
    ] = useLevelStatus();
    const [showBasicTutorial, endBasicTutorial] = useTutorial();
    const [targetLevel, setTargetLevel] = useState(colorTable[curLevel]);
    const maxDistance = 400;
    const [distance, setDistance] = useState(maxDistance);
    //  TODO
    // eslint-disable-next-line no-unused-vars
    const [percentMatchText, setPercentMatchText] = useState("");
    const [distanceGotWorse, setDistanceGotWorse] = useState(false);
    const [resetCount, setResetCount] = useState(0);
    const [debug, setDebug] = useState(false);
    const [levelsPanelOpen, setLevelsPanelOpen] = useState(false);
    const [hint, setHint] = useState(null);
    const [usedHint, setUsedHint] = useState(false);

    const numDroplets = vecCompSum(Object.values(components));
    const curStars = isPerfectVictory(curLevel, numDroplets, usedHint)
        ? levelAchievementPerfect
        : levelAchievementWon;

    // Callback for handling debug mode changes
    function handleDebug(newDebug) {
        setDebug(newDebug);
    }

    const goodEnough = useCallback(
        (newDistance) => {
            return newDistance <= targetLevel.tolerance;
        },
        [targetLevel.tolerance]
    );

    const checkCommit = useCallback(
        (cs) => {
            if (victory) {
                return;
            }
            const newDistance = colorDistance(
                targetLevel.cmyk,
                blendPaints(cs)
            );
            setDistance(newDistance);
            setDistanceGotWorse(distanceGotWorse || newDistance > distance);
            const winTolerance = getWinTolerance(targetLevel);
            // console.log("wintol", winTolerance, "newDist:", newDistance);
            let newVictory = victory;
            if (newDistance <= winTolerance) {
                newVictory = true;
                setVictory(true);
                onLevelAchievement(curLevel, curStars);
            }
            setPercentMatchText(
                numDroplets > 0
                    ? `${distanceToPercentMatch(newDistance, newVictory)}%`
                    : ""
            );
            if (goodEnough(newDistance)) {
                unlockLevel(curLevel + 1);
                if (!newVictory) {
                    onLevelAchievement(curLevel, levelAchievementThreshold);
                }
            }
        },
        [
            curLevel,
            curStars,
            distance,
            distanceGotWorse,
            goodEnough,
            numDroplets,
            onLevelAchievement,
            targetLevel,
            unlockLevel,
            victory,
        ]
    );

    useEffect(() => {
        const timerId1 = setTimeout(
            () => checkCommit(components),
            animationDurationMs + extraCommitDelay
        );
        const timerId2 = setTimeout(
            () => setDropletColor(undefined),
            dropletBlendDelay
        );
        return () => {
            clearTimeout(timerId1);
            clearTimeout(timerId2);
        };
    }, [checkCommit, components]);

    useEffect(() => {
        onChangeLevel(curLevel);
    }, [curLevel, onChangeLevel]);

    function resetColors() {
        saveUndo();
        setComponents(zeroComponents);
        setDropletColor(undefined);
        setResetCount((p) => p + 1);
        setDistance(maxDistance);
        setDistanceGotWorse(false);
        setVictory(false);
        setHint(null);
        setUsedHint(false);
    }

    function saveUndo() {
        setPrevComponents((prev) => [...prev, components]);
    }

    function undo() {
        if (prevComponents.length === 0) {
            return;
        }
        setComponents(prevComponents.at(-1));
        setPrevComponents((prev) => [...prev.slice(0, -1)]);
        setHint(null);
    }

    function nextLevel() {
        setLevel(curLevel + 1);
    }

    function setLevel(newLevel) {
        setVictory(false);
        resetColors();
        setPrevComponents([]);
        setCurLevel(newLevel);
        const newTarget =
            colorTable.length > newLevel ? colorTable[newLevel] : randomLevel();
        setTargetLevel(newTarget);
        setResetCount(0);
        setBottle(true);
        if (debug) {
            const optimal = optimalSolution(
                newTarget.cmyk,
                getWinTolerance(newTarget),
                30
            );
            console.log(
                Object.fromEntries(
                    Object.entries(optimal).filter(([_, val]) => val > 0)
                )
            );
        }
    }

    function handleClick(color) {
        autoPlayMusic();
        saveUndo();
        setComponents((prevState) => {
            return { ...prevState, [color]: prevState[color] + 1 };
        });
        let dropletComponents = { ...zeroComponents };
        dropletComponents[color] = 1;
        setDropletColor(convert.cmyk.hex(blendPaints(dropletComponents)));
        endBasicTutorial();
        setHint(null);
    }

    function setComponentValue(colorName, value) {
        saveUndo();
        setComponents((prevState) => ({ ...prevState, [colorName]: value }));
    }

    function targetColorRGB() {
        return levelRGB(targetLevel);
    }

    function handleLevelChoice(newLevel) {
        setLevelsPanelOpen(false);
        setLevel(newLevel);
    }

    function showHint() {
        setHint(formatHint(generateHint(components, targetLevel)));
        setUsedHint(true);
    }

    const allowResetWhen =
        !victory && (distanceGotWorse || numDroplets > dropletsUntilReset);
    const enableUndo = prevComponents.length > 0 && !victory;
    const enableSkip =
        debug ||
        (resetCount >= 3 && !victory) ||
        (goodEnough(distance) && !victory);
    const enableHints =
        debug ||
        (!victory &&
            resetCount > 0 &&
            numDroplets > 0 &&
            curLevel > 0 &&
            colorTable[curLevel - 1].toast !== null);
    const enableSliders = debug || (resetCount >= 3 && !victory);
    const targetRGB = targetColorRGB();
    const currentRGB = victory
        ? targetRGB
        : convert.cmyk.hex(blendPaints(components));
    const levelNotes =
        curLevel > 2 && colorTable[curLevel - 1].toast
            ? colorTable[curLevel - 1].toast
            : null;

    return (
        <NumDropletsContext.Provider value={numDroplets}>
            <LevelsPanelContext.Provider
                value={{ setLevelsPanelOpen: setLevelsPanelOpen }}
            >
                <Stack direction="column" alignItems="center" flexGrow={1}>
                    <Stack direction="row">
                        <LevelsButton />
                        <AppTitle onDebug={handleDebug} level={curLevel} />
                        <UndoButton enabled={enableUndo} onClick={undo} />
                        <ResetButton
                            enabled={
                                components !== zeroComponents && allowResetWhen
                            }
                            resetColors={resetColors}
                        />
                        <SkipLevelButton
                            enabled={enableSkip}
                            goodEnough={goodEnough(distance)}
                            nextLevel={nextLevel}
                        />
                        <SlidersButton
                            enabled={enableSliders}
                            onClick={() => setBottle((prev) => !prev)}
                        />
                        {levelNotes !== null && (
                            <NotesButton
                                notes={levelNotes}
                                enabled={!victory}
                            />
                        )}
                        {curLevel >= firstLevelWithAllColors && (
                            <HintButton
                                enabled={enableHints}
                                onClick={showHint}
                            />
                        )}
                    </Stack>
                    <RadiantButtons
                        components={components}
                        diameter="calc(95vw)"
                        onClick={handleClick}
                    >
                        <MixPlate
                            diameter="calc(60vw)"
                            currentRGB={currentRGB}
                            targetRGB={targetRGB}
                            targetLevel={targetLevel}
                            hint={hint}
                            showBasicTutorial={showBasicTutorial}
                            dropletColor={dropletColor}
                        />
                    </RadiantButtons>

                    <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
                        {!bottle && (
                            <ColorSliders
                                cmykColors={cmykColors}
                                level={curLevel}
                                components={components}
                                onSetComponentValue={setComponentValue}
                            />
                        )}
                    </Box>
                </Stack>
                <VictoryPanel
                    level={curLevel}
                    color={targetColorRGB()}
                    levelName={targetLevel.name}
                    isVictory={victory && !levelsPanelOpen}
                    onNextLevel={nextLevel}
                    onReset={resetColors}
                    showDroplets={bottle}
                    components={components}
                    stars={curStars}
                />
                <LevelsPanel
                    open={levelsPanelOpen}
                    onClose={handleLevelChoice}
                    curLevel={curLevel}
                    unlockedLevel={debug ? colorTable.length : unlockedLevel}
                    levelAchievements={levelAchievements}
                />
            </LevelsPanelContext.Provider>
        </NumDropletsContext.Provider>
    );
}

Game.propTypes = {
    autoPlayMusic: PropTypes.func.isRequired,
    onChangeLevel: PropTypes.func.isRequired,
};

export default Game;
