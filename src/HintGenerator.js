import { Box } from "@mui/material";
import { getWinTolerance, zeroComponents } from "./Colors";
import { optimalPath, optimalSolution } from "./GameAI";
import { objectMaxComponent } from "./Util/Vec";

export function generateHint(components, targetLevel) {
    const winTolerance = getWinTolerance(targetLevel);
    const path = optimalPath(components, targetLevel.cmyk, winTolerance);
    if (path === null) {
        const solution = optimalSolution(targetLevel.cmyk, winTolerance);
        const mostUnnecessary = getMostUnnecessary(components, solution);
        if (mostUnnecessary) {
            return `It's easier to start over. You don't need [${mostUnnecessary}]`;
        }
        return "It's easier to start over";
    }
    if (path === zeroComponents) {
        return "";
    }
    const maxDiff = objectMaxComponent(path);
    const component = Object.keys(maxDiff)[0];
    const amount = vagueAmount(maxDiff[component]);
    return `Add ${amount} [${component}]`;
}

const colorRe = /\[(\w+)\]/;

export function formatHint(str) {
    const colorMatch = str.match(colorRe);
    const parts = str.split(colorRe);
    if (colorMatch === null || colorMatch.length < 2 || parts.length < 3) {
        return tokenize(str);
    }
    const color = colorMatch[1];
    return (
        <>
            {tokenize(parts[0])}{" "}
            <Box component="span" sx={{ color: substituteColor(color) }}>
                {color}
            </Box>{" "}
            {tokenize(parts[2])}
        </>
    );
}

function substituteColor(color) {
    if (color === 'green') {
        return 'lightgreen';
    }
    return color;
}

function tokenize(str) {
    return <span>{str}</span>;
}

function vagueAmount(x) {
    if (x < 3) {
        return "a little";
    }
    if (x < 5) {
        return "some";
    }
    return "lots of";
}

function getMostUnnecessary(user, ideal) {
    let maxVal = Number.MIN_SAFE_INTEGER;
    let offendingComponent = null;
    for (const [component, val] of Object.entries(user)) {
        if (val > 0 && ideal[component] === 0 && val > maxVal) {
            maxVal = val;
            offendingComponent = component;
        }
    }
    return offendingComponent;
}
