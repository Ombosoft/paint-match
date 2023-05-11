import FastForwardIcon from '@mui/icons-material/FastForward';
import TuneIcon from '@mui/icons-material/Tune';
import UndoIcon from "@mui/icons-material/Undo";
import { Stack } from "@mui/material";
import convert from "color-convert";
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from "react";
import AppTitle from "./AppTitle";
import ColorButtons from "./ColorButtons";
import ColorSliders from "./ColorSliders";
import ColorSquare from "./ColorSquare";
import { cmykColors, zeroComponents } from "./Colors";
import { animationDurationMs, dropletBlendDelay, dropletsUntilReset, extraCommitDelay, skipLevels } from "./Constants";
import { colorTable } from "./Levels";
import { useLocalStorage } from "./LocalStorageHook";
import NiceButton from "./NiceButton";
import ResetButton from "./ResetButton";
import useTutorial from "./Tutorial";
import { distanceToPercentMatch, randomLevel } from "./Utils";
import { matCompSum, matScaleByVec, vecCompSum, vecDistance, vecNormalize, vecRound, vecScale } from "./Vec";
import VictoryPanel from "./VictoryPanel";

function Game({ autoPlayMusic }) {
    const [victory, setVictory] = useState(false);
    const [bottle, setBottle] = useState(true);

    const [components, setComponents] = useState(zeroComponents)
    const [prevComponents, setPrevComponents] = useState(zeroComponents)
    const [dropletColor, setDropletColor] = useState()


    const [level, setLevel] = useLocalStorage("level", skipLevels);
    const [showBasicTutorial, endBasicTutorial, canShowReset, onResetColors] = useTutorial();
    const [targetLevel, setTargetLevel] = useState(colorTable[level]);
    const maxDistance = 400;
    const [distance, setDistance] = useState(maxDistance);
    const [distanceGotWorse, setDistanceGotWorse] = useState(false);
    const [resetCount, setResetCount] = useState(0);
    const [numDroplets, setNumDroplets] = useState(0);
    // State for debug mode
    const [debug, setDebug] = useState(false);

    // Callback for handling debug mode changes
    const handleDebug = useCallback((newDebug) => {
        setDebug(newDebug);
    }, []);

    const checkCommit = useCallback((cs) => {
        const targetUniform = convert.cmyk.xyz(targetLevel.cmyk);
        const curUniform = convert.cmyk.xyz(getCurrentComponents(cs));
        const newDistance = vecDistance(targetUniform, curUniform);
        console.log('commit', newDistance);
        setDistance(newDistance);
        setDistanceGotWorse(distanceGotWorse || newDistance > distance);
        if (newDistance <= 0) {
            setVictory(true);
        }
    }, [distance, distanceGotWorse, targetLevel]);

    useEffect(() => {
        const timerId1 = setTimeout(
            () => checkCommit(components),
            animationDurationMs + extraCommitDelay)
        const timerId2 = setTimeout(
            () => setDropletColor(undefined),
            dropletBlendDelay)
        return () => {
            clearTimeout(timerId1);
            clearTimeout(timerId2);
        }
    }, [components, checkCommit]);

    // Returns CMYK
    function getCurrentComponents(cs) {
        let compWeights = [cs.cyan, cs.magenta, cs.yellow, cs.black, cs.red, cs.green, cs.blue];
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
        const scaleWithWhite = nonWhiteScale + cs.white > 0 ? nonWhiteScale / (nonWhiteScale + 3 * cs.white) : 0;
        const normalized = vecScale(vecNormalize(blendResult), 100 * scaleWithWhite);
        return vecRound(normalized);
    }

    function userResetColors() {
        resetColors();
        onResetColors();
    }

    function resetColors() {
        saveUndo();
        setComponents(zeroComponents);
        setDropletColor(undefined);
        setResetCount(p => p + 1);
        setDistance(maxDistance);
        setDistanceGotWorse(false);
        setNumDroplets(0);
        setVictory(false);
    }

    const saveUndo = useCallback(() => {
        setPrevComponents(components);
    }, [components]);

    function undo() {
        setComponents(prevComponents);
    }

    function nextLevel() {
        setVictory(false);
        resetColors();
        setPrevComponents(zeroComponents);
        const newLevel = level + 1;
        setLevel(newLevel);
        const newTarget = colorTable.length > newLevel ? colorTable[newLevel] : randomLevel();
        setTargetLevel(newTarget);
        setResetCount(0);
        setBottle(true);
    }

    const handleClick = useCallback((color) => {
        autoPlayMusic();
        saveUndo();
        setComponents(prevState => {
            return { ...prevState, [color]: prevState[color] + 1 };
        });
        setDropletColor(color);
        setNumDroplets((prev) => prev + 1);
        endBasicTutorial();
    }, [saveUndo, endBasicTutorial, autoPlayMusic]);

    const setComponentValue = useCallback((colorName, value) => {
        saveUndo();
        setComponents(prevState => ({ ...prevState, [colorName]: value }));
    }, [saveUndo]);

    const allowResetWhen = victory || distanceGotWorse || numDroplets > dropletsUntilReset;
    const enableUndo = components !== prevComponents && !victory;
    const enableSkip = debug || (resetCount >= 3 && !victory) || (distance <= targetLevel.tolerance);
    const enableSliders = debug || (resetCount >= 3 && !victory);

    return <>
        <Stack direction="row">
            <AppTitle onDebug={handleDebug} level={level} />
            <NiceButton title="Undo" enabled={enableUndo} onClick={undo}>
                <UndoIcon fontSize="large" />
            </NiceButton>
            <ResetButton
                showTutorial={canShowReset(level, numDroplets)}
                allowReset={components !== zeroComponents && allowResetWhen}
                resetColors={userResetColors}
            />
            <NiceButton title="Skip level" enabled={enableSkip} onClick={nextLevel}>
                <FastForwardIcon fontSize="large" />
            </NiceButton>
            <NiceButton
                title="Sliders"
                enabled={enableSliders}
                onClick={() => setBottle((prev) => !prev)}
            >
                <TuneIcon fontSize="large" />
            </NiceButton>
        </Stack >
        <Stack direction="row">
            <ColorSquare
                color={convert.cmyk.hex(targetLevel.cmyk)}
                label={debug ? `${targetLevel.name}  (${targetLevel.cmyk})` : targetLevel.name}
                showColor={debug}
                tooltip="Target color"
                showTooltip={showBasicTutorial}
            />
            <ColorSquare
                color={convert.cmyk.hex(getCurrentComponents(components))}
                label={debug
                    ? `d${distance} (${getCurrentComponents(components)})`
                    : `${distanceToPercentMatch(distance)}%`}
                showColor={debug}
                dropletColor={dropletColor}
                showDroplet
                tooltip="Current Mix"
                showTooltip={showBasicTutorial}
            />
        </Stack>

        {
            !bottle && (
                <ColorSliders cmykColors={cmykColors}
                    level={level}
                    components={components}
                    onSetComponentValue={setComponentValue} />
            )
        }


        {
            bottle && (<ColorButtons cmykColors={cmykColors}
                level={level}
                components={components}
                onClick={handleClick}
                showTooltip={showBasicTutorial}
            />)
        }
        <VictoryPanel
            level={level}
            levelName={targetLevel.name}
            isVictory={victory}
            onNextLevel={nextLevel}
            onReset={userResetColors}
            numDroplets={numDroplets}
        />
    </>;
}

Game.propTypes = {
    autoPlayMusic: PropTypes.func.isRequired,
}

export default Game;