import React, {useCallback, useEffect, useState} from "react";
import {animationDurationMs, dropletBlendDelay, dropletsUntilReset, extraCommitDelay, skipLevels} from "./Constants";
import {colorTable} from "./Levels";
import {matCompSum, matScaleByVec, vecCompSum, vecDistance, vecNormalize, vecRound, vecScale} from "./Vec";
import convert from "color-convert";
import {IconButton, Stack, Tooltip} from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import ReplayIcon from "@mui/icons-material/Replay";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TuneIcon from '@mui/icons-material/Tune';
import ColorSliders from "./ColorSliders";
import VictoryPanel from "./VictoryPanel";
import ColorButtons from "./ColorButtons";
import ColorSquare from "./ColorSquare";
import {distanceToPercentMatch, randomLevel} from "./Utils";
import {cmykColors, zeroComponents} from "./Colors";
import {useLocalStorage} from "./LocalStorageHook";
import PropTypes from 'prop-types';

function Game({debug}) {
    const [victory, setVictory] = useState(false);
    const [bottle, setBottle] = useState(true);

    const [components, setComponents] = useState(zeroComponents)
    const [prevComponents, setPrevComponents] = useState(zeroComponents)
    const [dropletColor, setDropletColor] = useState()


    const [level, setLevel] = useLocalStorage("level", skipLevels);
    const [showTutorial, setShowTutorial] = useLocalStorage("tutorial", true);
    const [targetLevel, setTargetLevel] = useState(colorTable[level]);
    const [distance, setDistance] = useState(200);
    const [distanceGotWorse, setDistanceGotWorse] = useState(false);
    const [resetCount, setResetCount] = useState(0);
    const [numDroplets, setNumDroplets] = useState(0);

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
    }, [components]);

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
        // console.log("compWeights", compWeights, "basis", basis, "blendResult", blendResult,
        //     "nonWhiteScale", nonWhiteScale, "scaleWithWhite", scaleWithWhite, "normalized", normalized);
        return vecRound(normalized);
    }

    function checkCommit(cs) {
        console.log('commit', getCurrentComponents(cs));
        const targetUniform = convert.cmyk.xyz(targetLevel.cmyk);
        const curUniform = convert.cmyk.xyz(getCurrentComponents(cs));
        const newDistance = vecDistance(targetUniform, curUniform);
        setDistance(newDistance);
        console.log("dgw", distanceGotWorse, newDistance, distance);
        setDistanceGotWorse(distanceGotWorse || newDistance > distance);
        if (newDistance <= targetLevel.tolerance) {
            setVictory(true);
        }
    }

    function resetColors() {
        saveUndo();
        setComponents(zeroComponents);
        setDropletColor(undefined);
        setResetCount(p => p + 1);
        setDistance(200);
        setDistanceGotWorse(false);
        setNumDroplets(0);
        setVictory(false);
    }

    function saveUndo() {
        console.log("saveUndo", components);
        setPrevComponents(components);
    }

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

    function endTutorial() {
        setShowTutorial(false);
    }

    const handleClick = useCallback((color) => {
        saveUndo();
        setComponents(prevState => {
            return {...prevState, [color]: prevState[color] + 1};
        });
        setDropletColor(color);
        setNumDroplets((prev) => prev + 1);
        endTutorial();
    }, [saveUndo]);

    const setComponentValue = useCallback((colorName, value) => {
        saveUndo();
        setComponents(prevState => ({...prevState, [colorName]: value}));
    }, [saveUndo]);

    const allowResetWhen = victory || distanceGotWorse || numDroplets > dropletsUntilReset;
    return <>
        <VictoryPanel isVictory={victory} onNextLevel={nextLevel}/>

        <Stack direction="row">
            <p>Level {level}</p>
            <Tooltip title="Undo" placement="top-end" arrow>
                <IconButton
                    onClick={undo}
                    color="secondary"
                    size="medium"
                    disabled={components === prevComponents || victory}>
                    <UndoIcon fontSize="large"/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Start over" placement="top-end" arrow>
                <IconButton
                    onClick={resetColors}
                    color="secondary"
                    size="medium"
                    disabled={components === zeroComponents || !allowResetWhen}>
                    <ReplayIcon fontSize="large"/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Skip level" placement="top-end" arrow>
                <IconButton
                    onClick={nextLevel}
                    color="secondary"
                    size="medium"
                    disabled={(resetCount < 6 && !debug) || victory}>
                    <SkipNextIcon fontSize="large"/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Sliders" placement="top-end" arrow>
                <IconButton
                    onClick={() => setBottle((prev) => !prev)}
                    color="secondary"
                    size="medium"
                    disabled={(resetCount < 3 && !debug) || victory}>
                    <TuneIcon fontSize="large"/>
                </IconButton>
            </Tooltip>
        </Stack>

        {!bottle && (
            <ColorSliders cmykColors={cmykColors}
                          level={level}
                          components={components}
                          onSetComponentValue={setComponentValue}/>
        )}


        {bottle && (<ColorButtons cmykColors={cmykColors}
                                  level={level}
                                  components={components}
                                  onClick={handleClick}
                                  showTooltip={showTutorial}
                                  />)
        }

        <Stack direction="row">
            <ColorSquare
                color={convert.cmyk.hex(targetLevel.cmyk)}
                label={debug ? `${targetLevel.name}  (${targetLevel.cmyk})` : targetLevel.name}
                showColor={debug}
                tooltip="Target color"
                showTooltip={showTutorial}
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
                showTooltip={showTutorial}
            />
        </Stack>
    </>;
}

Game.propTypes = {
    debug: PropTypes.bool.isRequired,
};

export default Game;