import { Stack } from "@mui/material";
import convert from "color-convert";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import AppTitle from "./AppTitle";
import ColorButtons from "./ColorButtons";
import colorDistance from "./ColorDistance";
import ColorSliders from "./ColorSliders";
import ColorSquare from "./ColorSquare";
import { cmykColors, zeroComponents } from "./Colors";
import {
    animationDurationMs,
    defaultWinTolerance,
    dropletBlendDelay,
    dropletsUntilReset,
    extraCommitDelay,
} from "./Constants";
import useLevelStatus from "./LevelStatus";
import { colorTable } from "./Levels";
import LevelsButton from "./LevelsButton";
import LevelsPanel from "./LevelsPanel";
import { LevelsPanelContext } from "./LevelsPanelContext";
import { NumDropletsContext } from "./NumDropletsContext";
import ResetButton from "./ResetButton";
import SkipLevelButton from "./SkipLevelButton";
import SlidersButton from "./SlidersButton";
import { useTutorial } from "./Tutorial";
import UndoButton from "./UndoButton";
import { distanceToPercentMatch, randomLevel } from "./Utils";
import {
    matCompSum,
    matScaleByVec,
    vecCompSum,
    vecNormalize,
    vecRound,
    vecScale,
} from "./Vec";
import VictoryPanel from "./VictoryPanel";

function Game({ autoPlayMusic }) {
    const [victory, setVictory] = useState(false);
    const [bottle, setBottle] = useState(true);

    const [components, setComponents] = useState(zeroComponents);
    const [prevComponents, setPrevComponents] = useState(zeroComponents);
    const [dropletColor, setDropletColor] = useState();

    const [curLevel, setCurLevel, unlockedLevel, unlockLevel] =
        useLevelStatus();
    const [showBasicTutorial, endBasicTutorial] = useTutorial();
    const [targetLevel, setTargetLevel] = useState(colorTable[curLevel]);
    const maxDistance = 400;
    const [distance, setDistance] = useState(maxDistance);
    const [distanceGotWorse, setDistanceGotWorse] = useState(false);
    const [resetCount, setResetCount] = useState(0);
    const [debug, setDebug] = useState(false);
    const [levelsPanelOpen, setLevelsPanelOpen] = useState(false);

    const numDroplets = vecCompSum(Object.values(components));

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
                getCurrentComponents(cs)
            );
            setDistance(newDistance);
            setDistanceGotWorse(distanceGotWorse || newDistance > distance);
            const winTolerance =
                defaultWinTolerance + (targetLevel.extraWinTolerance ?? 0.0);
            console.log("wintol", winTolerance, "newDist:", newDistance);
            if (newDistance <= winTolerance) {
                setVictory(true);
            }
            if (goodEnough(newDistance)) {
                unlockLevel(curLevel + 1);
            }
        },
        [
            curLevel,
            distance,
            distanceGotWorse,
            goodEnough,
            targetLevel.cmyk,
            targetLevel.extraWinTolerance,
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

    // Returns CMYK
    function getCurrentComponents(cs) {
        let compWeights = [
            cs.cyan,
            cs.magenta,
            cs.yellow,
            cs.black,
            cs.red,
            cs.green,
            cs.blue,
        ];
        const cyan = [100, 0, 0, 0];
        const magenta = [0, 100, 0, 0];
        const yellow = [0, 0, 100, 0];
        const black = [100, 100, 100, 0];
        const red = [0, 100, 100, 0];
        const green = [100, 0, 100, 0];
        const blue = [100, 100, 0, 0];
        const basis = [cyan, magenta, yellow, black, red, green, blue];
        const blendResult = matCompSum(matScaleByVec(basis, compWeights));
        const nonWhiteScale = vecCompSum(blendResult) / 100;
        const scaleWithWhite =
            nonWhiteScale + cs.white > 0
                ? nonWhiteScale / (nonWhiteScale + 3 * cs.white)
                : 0;
        const normalized = vecScale(
            vecNormalize(blendResult),
            100 * scaleWithWhite
        );
        return vecRound(normalized);
    }

    function resetColors() {
        saveUndo();
        setComponents(zeroComponents);
        setDropletColor(undefined);
        setResetCount((p) => p + 1);
        setDistance(maxDistance);
        setDistanceGotWorse(false);
        setVictory(false);
    }

    function saveUndo() {
        setPrevComponents(components);
    }

    function undo() {
        setComponents(prevComponents);
    }

    function nextLevel() {
        setLevel(curLevel + 1);
    }

    function setLevel(newLevel) {
        setVictory(false);
        resetColors();
        setPrevComponents(zeroComponents);
        setCurLevel(newLevel);
        const newTarget =
            colorTable.length > newLevel ? colorTable[newLevel] : randomLevel();
        setTargetLevel(newTarget);
        setResetCount(0);
        setBottle(true);
    }

    function handleClick(color) {
        autoPlayMusic();
        saveUndo();
        setComponents((prevState) => {
            return { ...prevState, [color]: prevState[color] + 1 };
        });
        setDropletColor(color);
        endBasicTutorial();
    }

    function setComponentValue(colorName, value) {
        saveUndo();
        setComponents((prevState) => ({ ...prevState, [colorName]: value }));
    }

    function targetColorRGB() {
        return convert.cmyk.hex(targetLevel.cmyk);
    }

    function handleLevelChoice(newLevel) {
        setLevelsPanelOpen(false);
        setLevel(newLevel);
    }

    const allowResetWhen =
        victory || distanceGotWorse || numDroplets > dropletsUntilReset;
    const enableUndo = components !== prevComponents && !victory;
    const enableSkip =
        debug ||
        (resetCount >= 3 && !victory) ||
        (goodEnough(distance) && !victory);
    const enableSliders = debug || (resetCount >= 3 && !victory);
    const targetRGB = targetColorRGB();
    const currentRGB = victory
        ? targetRGB
        : convert.cmyk.hex(getCurrentComponents(components));

    return (
        <NumDropletsContext.Provider value={numDroplets}>
            <LevelsPanelContext.Provider
                value={{ setLevelsPanelOpen: setLevelsPanelOpen }}
            >
                <Stack direction="row">
                    <LevelsButton />
                    <AppTitle onDebug={handleDebug} level={curLevel} />
                    <UndoButton enabled={enableUndo} onClick={undo} />
                    <ResetButton
                        level={curLevel}
                        allowReset={
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
                </Stack>
                <Stack direction="row">
                    <ColorSquare
                        color={targetRGB}
                        label={
                            debug
                                ? `${targetLevel.name}  (${targetLevel.cmyk})`
                                : targetLevel.name
                        }
                        showColor={debug}
                        tooltip="Target color"
                        showTooltip={showBasicTutorial}
                    />
                    <ColorSquare
                        color={currentRGB}
                        label={
                            debug
                                ? `d${distance} (${getCurrentComponents(
                                      components
                                  )})`
                                : `${distanceToPercentMatch(
                                      distance,
                                      victory
                                  )}%`
                        }
                        showColor={debug}
                        dropletColor={dropletColor}
                        showDroplet
                        tooltip="Current Mix"
                        showTooltip={showBasicTutorial}
                    />
                </Stack>

                {!bottle && (
                    <ColorSliders
                        cmykColors={cmykColors}
                        level={curLevel}
                        components={components}
                        onSetComponentValue={setComponentValue}
                    />
                )}

                {bottle && (
                    <ColorButtons
                        cmykColors={cmykColors}
                        level={curLevel}
                        components={components}
                        onClick={handleClick}
                        showTooltip={showBasicTutorial}
                    />
                )}
                <VictoryPanel
                    level={curLevel}
                    color={targetColorRGB()}
                    levelName={targetLevel.name}
                    isVictory={victory}
                    onNextLevel={nextLevel}
                    onReset={resetColors}
                />
                <LevelsPanel
                    open={levelsPanelOpen}
                    onClose={handleLevelChoice}
                    curLevel={curLevel}
                    unlockedLevel={unlockedLevel}
                />
            </LevelsPanelContext.Provider>
        </NumDropletsContext.Provider>
    );
}

Game.propTypes = {
    autoPlayMusic: PropTypes.func.isRequired,
};

export default Game;
