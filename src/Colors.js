import { createTheme } from "@mui/material/styles";
import convert from "color-convert";
import { defaultWinTolerance, textForeground } from "./Constants";
import { colorTable } from "./Levels";
import {
    matCompSum,
    matScaleByVec,
    vecCompSum,
    vecNormalize,
    vecRound,
    vecScale,
} from "./Util/Vec";

export const themePalette = {
    red: {
        light: "#E01010",
        main: "#C01010",
        dark: "#D01010",
    },
    green: {
        light: "#10E010",
        main: "#10B710",
        dark: "#10D010",
    },
    blue: {
        light: "#1010F7",
        main: "#1010C0",
        dark: "#1010D0",
    },
    cyan: {
        light: "#00F7F7",
        main: "#00C0C0",
        dark: "#00E0E0",
    },
    magenta: {
        light: "#F000F0",
        main: "#C000C0",
        dark: "#E000E0",
    },
    yellow: {
        light: "#F0F000",
        main: "#D0D000",
        dark: "#E0E000",
    },
    black: {
        light: "#383838",
        main: "#080808",
        dark: "#000000",
    },
    white: {
        light: "#F7F7F7",
        main: "#C8C8C8",
        dark: "#E8E8E8",
    },
};

export const theme = createTheme({
    palette: themePalette,
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
    { color: "black", minLevel: 5 },
    { color: "white", minLevel: 4 },
    { color: "red", minLevel: 13 },
    { color: "green", minLevel: 17 },
    { color: "blue", minLevel: 22 },
];
export const minLevels = Object.fromEntries(
    cmykColors.map((x) => [x.color, x.minLevel])
);
export const firstLevelWithAllColors =
    Math.max(...cmykColors.map((c) => c.minLevel)) + 1;

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

export function isPerfectVictory(curLevel, numDroplets, usedHint) {
    if (usedHint) {
        return false;
    }
    return numDroplets <= colorTable[curLevel].cost;
}

export function levelRGB(levelDef) {
    return convert.cmyk.hex(levelDef.cmyk);
}

export function rgbToString(rgb) {
    return `#${rgb}`;
}

function textColorImpl([l]) {
    if (l > 53) {
        return "black";
    }
    return textForeground;
}

export function textColor(backgroundCMYK) {
    return textColorImpl(convert.cmyk.lab(backgroundCMYK));
}

export function textColorFromRGB(backgroundRGB) {
    return textColorImpl(convert.hex.lab(backgroundRGB));
}

export function textColorFromName(color) {
    return color === "black" || color === "blue" ? textForeground : "black";
}
