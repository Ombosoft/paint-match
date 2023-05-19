import { createTheme } from "@mui/material/styles";
import { defaultWinTolerance } from "./Constants";
import {
    matCompSum,
    matScaleByVec,
    vecCompSum,
    vecNormalize,
    vecRound,
    vecScale,
} from "./Util/Vec";

export const theme = createTheme({
    palette: {
        red: {
            main: "#C01010",
            dark: "#D01010",
        },
        green: {
            main: "#10C010",
            dark: "#10D010",
        },
        blue: {
            main: "#1010C0",
            dark: "#1010D0",
        },
        cyan: {
            main: "#00D0D0",
            dark: "#00E0E0",
        },
        magenta: {
            main: "#D000D0",
            dark: "#E000E0",
        },
        yellow: {
            main: "#D0D000",
            dark: "#E0E000",
        },
        black: {
            main: "#181818",
            dark: "#000000",
        },
        white: {
            main: "#D8D8D8",
            dark: "#E8E8E8",
        },
    },
});
export const zeroComponents = {
    red: 0,
    green: 0,
    blue: 0,
    cyan: 0,
    magenta: 0,
    yellow: 0,
    black: 0,
    white: 0,
};
export const cmykColors = [
    { color: "cyan", minLevel: 1 },
    { color: "magenta", minLevel: 2 },
    { color: "yellow", minLevel: 0 },
    { color: "black", minLevel: 8 },
    { color: "white", minLevel: 4 },
    { color: "red", minLevel: 10 },
    { color: "green", minLevel: 12 },
    { color: "blue", minLevel: 15 },
];

// Object -> CMYK
export function blendPaints(cs) {
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

export function getWinTolerance(levelDef) {
    return defaultWinTolerance + (levelDef.extraWinTolerance ?? 0.0);
}
