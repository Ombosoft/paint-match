import { Box, Stack } from "@mui/material";
import convert from "color-convert";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import colorDistance from "../ColorDistance";
import {
    blendPaints,
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
import { percentMatch, randomLevel } from "../Util/Utils";
import { vecCompSum } from "../Util/Vec";
import { useIsWide } from "../Util/ViewportDimensions";
import GameContent from "./GameContent";
import HealthBar from "./HealthBar";
import { HintBox } from "./HintBox";
import HintButton from "./HintButton";
import LevelTitle from "./LevelTitle";
import LevelsButton from "./LevelsButton";
import LevelsPanel from "./LevelsPanel";
import NotesButton from "./NotesButton";
import ResetButton from "./ResetButton";
import SkipLevelButton from "./SkipLevelButton";
import SlidersButton from "./SlidersButton";
import UndoButton from "./UndoButton";
import VictoryPanel from "./VictoryPanel";

function Game({ autoPlayMusic, onChangeLevel }) {
    const [victory, setVictory] = useState(false);
    const [sliderMode, setSliderMode] = useState(false);

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
    const [targetLevel, setTargetLevel] = useState(colorTable[curLevel]);
    const maxDistance = 400;
    const [distance, setDistance] = useState(maxDistance);
    const [percentMatchVal, setPercentMatchVal] = useState(0);
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
            setPercentMatchVal(
                percentMatch(newDistance, newVictory, numDroplets)
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
        setSliderMode(false);
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
        if (victory) {
            return;
        }
        autoPlayMusic();
        saveUndo();
        setComponents((prevState) => {
            return { ...prevState, [color]: prevState[color] + 1 };
        });
        let dropletComponents = { ...zeroComponents };
        dropletComponents[color] = 1;
        setDropletColor(convert.cmyk.hex(blendPaints(dropletComponents)));
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
                <Stack
                    id="Game"
                    direction="column"
                    alignItems="center"
                    flexGrow={1}
                    paddingLeft="1em"
                    paddingRight="1em"
                >
                    <OneOrTwoRows
                        firstRow={
                            <>
                                {" "}
                                <LevelsButton />
                                <LevelTitle
                                    onDebug={handleDebug}
                                    level={curLevel}
                                />
                            </>
                        }
                    >
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
                            onClick={() => setSliderMode((prev) => !prev)}
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
                    </OneOrTwoRows>
                    <HintBox hint={hint} />
                    <HealthBar percent={percentMatchVal} />
                    <GameContent
                        components={components}
                        curLevel={curLevel}
                        victory={victory}
                        sliderMode={sliderMode}
                        targetLevel={targetLevel}
                        currentRGB={currentRGB}
                        targetRGB={targetRGB}
                        dropletColor={dropletColor}
                        onClick={handleClick}
                        setComponentValue={setComponentValue}
                    />
                </Stack>
                <VictoryPanel
                    level={curLevel}
                    color={targetColorRGB()}
                    levelName={targetLevel.name}
                    isVictory={victory && !levelsPanelOpen}
                    onNextLevel={nextLevel}
                    onReset={resetColors}
                    showDroplets={sliderMode}
                    components={components}
                    stars={curStars}
                />
                <LevelsPanel
                    open={levelsPanelOpen}
                    onClose={handleLevelChoice}
                    curLevel={curLevel}
                    unlockedLevel={
                        debug
                            ? Math.min(
                                  colorTable.length - 1,
                                  unlockedLevel + 100
                              )
                            : unlockedLevel
                    }
                    levelAchievements={levelAchievements}
                />
            </LevelsPanelContext.Provider>
        </NumDropletsContext.Provider>
    );
}

function OneOrTwoRows({ firstRow, children }) {
    const isWide = useIsWide();
    return isWide ? (
        <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            alignSelf="start"
            width="100%"
        >
            {firstRow}
            <Box flexGrow={1} />
            {children}
        </Stack>
    ) : (
        <Stack
            direction="column"
            alignContent="start"
            alignSelf="start"
            width="100%"
        >
            <Stack direction="row" justifyContent="start" alignItems="center">
                {firstRow}
            </Stack>
            <Stack direction="row" justifyContent="start" alignItems="center">
                {children}
            </Stack>
        </Stack>
    );
}

Game.propTypes = {
    autoPlayMusic: PropTypes.func.isRequired,
    onChangeLevel: PropTypes.func.isRequired,
};

export default Game;
