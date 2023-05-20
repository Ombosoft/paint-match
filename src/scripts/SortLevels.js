import { getWinTolerance } from "../Colors.js";
import { minCost } from "../GameAI.js";
import { colorTable } from "../Levels.js";
const fs = require("fs");

let code = "export const colorTable = [\n";
let index = 0;
for (const level of colorTable.slice(0, 90)) {
    const cmyk = JSON.stringify(level.cmyk);
    const ewt = level.extraWinTolerance ? `, extraWinTolerance: ${level.extraWinTolerance}` : '';
    const cost = minCost(level.cmyk, getWinTolerance(level));
    console.log(index, cost);
    code += `    { index: ${index}, name: "${level.name}", cmyk: ${cmyk}, cost: ${cost}, tolerance: ${level.tolerance}${ewt} },\n`;
    index += 1;
}
code += "];\n";
fs.writeFileSync("src/Levels1.js", code);
