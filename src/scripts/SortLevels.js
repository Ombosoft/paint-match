import { cmykColors, getWinTolerance } from "../Colors.js";
import { minCost } from "../GameAI.js";
import { colorTable } from "../Levels.js";
import { compareBy } from "../Util/Utils.js";
const fs = require("fs");

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

const levels = colorTable.slice(0, colorTable.length);
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
dynamicLevels.sort(compareBy(x => x.cost))
const sortedLevels = [].concat(hardcodedLevels, dynamicLevels);

count(sortedLevels);
save(sortedLevels);
