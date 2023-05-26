import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Box, Stack } from "@mui/material";
import convert from "color-convert";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import colorDistance from "../ColorDistance";
import {
    blendPaints,
    cmykColors,
    getWinTolerance,
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
import { optimalPath } from "../GameAI";
import useLevelStatus from "../LevelStatus";
import { colorTable } from "../Levels";
import { useTutorial } from "../Tutorial";
import { distanceToPercentMatch, randomLevel } from "../Util/Utils";
import { vecCompSum } from "../Util/Vec";
import AppTitle from "./AppTitle";
import ColorButtons from "./ColorButtons";
import ColorSliders from "./ColorSliders";
import ColorSquare from "./ColorSquare";
import LevelsButton from "./LevelsButton";
import LevelsPanel from "./LevelsPanel";
import NiceButton from "./NiceButton";
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
        onLevelWon,
    ] = useLevelStatus();
    const [showBasicTutorial, endBasicTutorial] = useTutorial();
    const [targetLevel, setTargetLevel] = useState(colorTable[curLevel]);
    const maxDistance = 400;
    const [distance, setDistance] = useState(maxDistance);
    const [percentMatchText, setPercentMatchText] = useState("");
    const [distanceGotWorse, setDistanceGotWorse] = useState(false);
    const [resetCount, setResetCount] = useState(0);
    const [debug, setDebug] = useState(false);
    const [levelsPanelOpen, setLevelsPanelOpen] = useState(false);
    const [hint, setHint] = useState(null);

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
                blendPaints(cs)
            );
            setDistance(newDistance);
            setDistanceGotWorse(distanceGotWorse || newDistance > distance);
            const winTolerance = getWinTolerance(targetLevel);
            console.log("wintol", winTolerance, "newDist:", newDistance);
            let newVictory = victory;
            if (newDistance <= winTolerance) {
                newVictory = true;
                setVictory(true);
                onLevelWon(curLevel);
            }
            setPercentMatchText(
                numDroplets > 0
                    ? `${distanceToPercentMatch(newDistance, newVictory)}%`
                    : ""
            );
            if (goodEnough(newDistance)) {
                unlockLevel(curLevel + 1);
            }
        },
        [
            curLevel,
            distance,
            distanceGotWorse,
            goodEnough,
            numDroplets,
            onLevelWon,
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
        setPrevComponents((prev) => [...prev, components]);
    }

    function undo() {
        if (prevComponents.length === 0) {
            return;
        }
        setComponents(prevComponents.at(-1));
        setPrevComponents((prev) => [...prev.slice(0, -1)]);
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
        onChangeLevel(newLevel);
        if (debug) {
            const optimal = optimalPath(
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
        setDropletColor(color);
        endBasicTutorial();
        setHint(null);
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

    function showHint() {
        setHint('Keep going!');
    }

    const allowResetWhen =
        victory || distanceGotWorse || numDroplets > dropletsUntilReset;
    const enableUndo = prevComponents.length > 0 && !victory;
    const enableSkip =
        debug ||
        (resetCount >= 3 && !victory) ||
        (goodEnough(distance) && !victory);
    const enableSliders = debug || (resetCount >= 3 && !victory);
    const targetRGB = targetColorRGB();
    const currentRGB = victory
        ? targetRGB
        : convert.cmyk.hex(blendPaints(components));

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
                        <NiceButton
                            enabled={numDroplets > 0}
                            onClick={showHint}
                        ><TipsAndUpdatesIcon/></NiceButton>
                    </Stack>
                    <Stack direction="row" flexGrow={1}>
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
                                    ? `d${distance.toFixed(2)} (${blendPaints(
                                          components
                                      )})`
                                    : percentMatchText
                            }
                            showColor={debug}
                            dropletColor={dropletColor}
                            showDroplet
                            tooltip={hint}
                            showTooltip={hint !== null}
                        />
                    </Stack>

                    <Box sx={{ marginTop: "1em", marginBottom: "1em" }}>
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
