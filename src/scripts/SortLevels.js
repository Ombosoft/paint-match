import colorDistance from "../ColorDistance.js";
import { cmykColors, getWinTolerance } from "../Colors.js";
import { minCost } from "../GameAI.js";
import { colorTable } from "../Levels.js";
import { compareBy, groupBy, mapValues } from "../Util/Utils.js";
const fs = require("fs");

// const limit = 200;
const limit = colorTable.length

function save(levels) {
    let code =
        "export const colorTable = [\n" +
        levels
            .map(
                (level) =>
                    `    { index: ${level.index}, name: "${level.name}", cmyk: ${level.cmykStr}, ` +
                    `cost: ${level.cost}, tolerance: ${level.tolerance}${level.ewt} },\n`
            )
            .join("") +
        "];\n";
    fs.writeFileSync("src/Levels.js", code);
}

function count(levels) {
    let index = 0;
    for (const level of levels) {
        level.index = index;
        index += 1;
    }
}

function popFurthest(levels, level, prevPrevColor) {
    let maxDistance = 0;
    let bestIndex = 0;
    for (let i = 0; i < levels.length; ++i) {
        const cur = levels[i];
        const distance = colorDistance(level.cmyk, cur.cmyk);
        const distanceToPrevPrev = colorDistance(prevPrevColor, cur.cmyk);
        if (distance + distanceToPrevPrev / 2 > maxDistance) {
            maxDistance = distance;
            bestIndex = i;
        }
    }
    const bestLevel = levels[bestIndex];
    levels.splice(bestIndex, 1);
    return bestLevel;
}

// Sort group by best effort largest color distance between elements
function sortGroup(levels) {
    let prevPrevColor = [0, 0, 0, 0];
    let level = levels.pop();
    let result = [level];
    while (levels.length > 0) {
        const nextLevel = popFurthest(levels, level, prevPrevColor);
        prevPrevColor = level.cmyk;
        level = nextLevel;
        result.push(level);
    }
    return result;
}

const levels = colorTable.slice(0, limit);
for (const level of levels) {
    level.cmykStr = JSON.stringify(level.cmyk);
    const cost = minCost(level.cmyk, getWinTolerance(level));
    console.log(level.index, cost);
    let extraWinTolerance = level.extraWinTolerance ?? 0;
    if (cost === 0) {
        extraWinTolerance += 0.1;
    }
    const ewt = extraWinTolerance
        ? `, extraWinTolerance: ${extraWinTolerance.toFixed(1)}`
        : "";
    level.cost = cost;
    level.ewt = ewt;
}

const firstDynamic = Math.max(...cmykColors.map((c) => c.minLevel)) + 1;
const hardcodedLevels = levels.slice(0, firstDynamic);
const dynamicLevels = levels.slice(firstDynamic, levels.length);
const groupByCost = groupBy(dynamicLevels, (level) => level.cost);
const sortedGroups = Object.entries(
    mapValues(groupByCost, (xs) => sortGroup(xs))
);
sortedGroups.sort(compareBy(([key, val]) => Number(key)));
const sortedLevels = [].concat(
    hardcodedLevels,
    sortedGroups.flatMap(([key, val]) => val)
);

count(sortedLevels);
save(sortedLevels);
