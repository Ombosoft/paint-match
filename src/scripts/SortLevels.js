import { getWinTolerance } from "../Colors.js";
import { minCost } from "../GameAI.js";
import { colorTable } from "../Levels.js";
const fs = require("fs");

let code = "export const colorTable = [\n";
let index = 0;
for (const level of colorTable) {
    const cmyk = JSON.stringify(level.cmyk);
    const cost = minCost(level.cmyk, getWinTolerance(level));
    console.log(index, cost);
    let extraWinTolerance = level.extraWinTolerance ?? 0;
    if (cost === 0) {
        extraWinTolerance += 0.1;
    }
    const ewt = extraWinTolerance ? `, extraWinTolerance: ${extraWinTolerance.toFixed(1)}` : '';
    code += `    { index: ${index}, name: "${level.name}", cmyk: ${cmyk}, cost: ${cost}, tolerance: ${level.tolerance}${ewt} },\n`;
    index += 1;
}
code += "];\n";
fs.writeFileSync("src/Levels.js", code);
