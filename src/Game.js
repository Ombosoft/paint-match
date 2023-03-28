import React, {useEffect, useState} from "react";
import {animationDurationMs, dropletBlendDelay, dropletsUntilReset, extraCommitDelay, skipLevels} from "./Constants";
import {colorTable} from "./Levels";
import {matCompSum, matScaleByVec, vecCompSum, vecDistance, vecNormalize, vecRound, vecScale} from "./Vec";
import convert from "color-convert";
import {Alert, AlertTitle, Button, Collapse, IconButton, Stack, Tooltip} from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import ReplayIcon from "@mui/icons-material/Replay";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TuneIcon from '@mui/icons-material/Tune';
import {ColorSlider} from "./ColorSlider";
import {ColorButton} from "./ColorButton";
import {ColorSquare} from "./ColorSquare";
import {distanceToPercentMatch, randInt} from "./Utils";

const zeroComponents = {
    red: 0,
    green: 0,
    blue: 0,
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0,
    white: 0,
};

const cmykColors = [
    {color: "cyan", minLevel: 1},
    {color: "magenta", minLevel: 2},
    {color: "yellow", minLevel: 0},
    {color: "black", minLevel: 8},
    {color: "white", minLevel: 4},
    {color: "red", minLevel: 9},
    {color: "green", minLevel: 12},
    {color: "blue", minLevel: 15}
];

export function Game({debug}) {
    const [victory, setVictory] = useState(false);
    const [bottle, setBottle] = useState(true);

    const [components, setComponents] = useState(zeroComponents)
    const [prevComponents, setPrevComponents] = useState(zeroComponents)
    const [dropletColor, setDropletColor] = useState()


    const [level, setLevel] = useState(skipLevels);
    const [targetLevel, setTargetLevel] = useState(colorTable[skipLevels]);
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
        const scaleWithWhite = nonWhiteScale + cs.white > 0 ? nonWhiteScale / (nonWhiteScale + cs.white) : 0;
        const normalized = vecScale(vecNormalize(blendResult), 100 * scaleWithWhite);
        // console.log("compWeights", compWeights, "basis", basis, "blendResult", blendResult,
        //     "nonWhiteScale", nonWhiteScale, "scaleWithWhite", scaleWithWhite, "normalized", normalized);
        return vecRound(normalized);
    }

    function randomLevel() {
        const min = 5;
        const max = 95;
        return {
            name: "",
            cmyk: [randInt(min, max), randInt(min, max), randInt(min, max), randInt(min, max / 2)],
            tolerance: 5,
        };
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

    function handleClick(color) {
        saveUndo();
        setComponents(prevState => {
            return {...prevState, [color]: prevState[color] + 1};
        });
        setDropletColor(color);
        setNumDroplets((prev) => prev + 1);
    }

    function setComponentValue(colorName, value) {
        saveUndo();
        setComponents(prevState => ({...prevState, [colorName]: value}));
    }

    const allowResetWhen = victory || distanceGotWorse || numDroplets > dropletsUntilReset;
    return <>
        <Collapse in={victory}>
            <Alert
                action={
                    <IconButton
                        onClick={nextLevel}
                        color="secondary"
                        size="large">
                        <SkipNextIcon fontSize="large"/>
                    </IconButton>
                }
                sx={{mb: 2}}
            >
                <AlertTitle sx={{fontSize: 22, marginTop: 0, marginBottom: 0}}>Well done!</AlertTitle>
            </Alert>
        </Collapse>

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

        {!bottle && <> {
            cmykColors
                .map(color =>
                        level >= color.minLevel && <ColorSlider
                            key={color.color}
                            color={color.color}
                            components={components}
                            onSetComponentValue={setComponentValue}
                        />
                )
        }</>}


        {bottle &&
            <Stack direction="column" spacing={1}>
                <>{cmykColors.map(color =>
                        level >= color.minLevel && <ColorButton
                            key={color.color}
                            color={color.color}
                            components={components}
                            onClick={handleClick}
                        />
                )
                }</>
            </Stack>
        }

        <Stack direction="row">
            <ColorSquare
                color={convert.cmyk.hex(targetLevel.cmyk)}
                label={debug ? `${targetLevel.name}  (${targetLevel.cmyk})` : targetLevel.name}
                showColor={debug}
            />
            <ColorSquare
                color={convert.cmyk.hex(getCurrentComponents(components))}
                label={debug
                    ? `d${distance} (${getCurrentComponents(components)})`
                    : `${distanceToPercentMatch(distance)}%`}
                showColor={debug}
                dropletColor={dropletColor}
                showDroplet
            />
        </Stack>
    </>;
}