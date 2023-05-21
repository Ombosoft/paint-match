import { getWinTolerance } from "../Colors.js";
import { minCost } from "../GameAI.js";
import { colorTable } from "../Levels.js";
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

let index = 0;
for (const level of colorTable) {
    level.cmykStr = JSON.stringify(level.cmyk);
    const cost = minCost(level.cmyk, getWinTolerance(level));
    console.log(index, cost);
    let extraWinTolerance = level.extraWinTolerance ?? 0;
    if (cost === 0) {
        extraWinTolerance += 0.1;
    }
    const ewt = extraWinTolerance
        ? `, extraWinTolerance: ${extraWinTolerance.toFixed(1)}`
        : "";
    level.cost = cost;
    level.ewt = ewt;
    level.index = index;
    index += 1;
}

save(colorTable);
