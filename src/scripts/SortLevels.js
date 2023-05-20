import { colorTable } from "../Levels.js";
const fs = require("fs");

let code = "export const colorTable = [\n";
let index = 0;
for (const level of colorTable) {
    const cmyk = JSON.stringify(level.cmyk);
    const ewt = level.extraWinTolerance ? `, extraWinTolerance: ${level.extraWinTolerance}` : '';
    code += `    { index: ${index}, name: "${level.name}", cmyk: ${cmyk}, tolerance: ${level.tolerance}${ewt} },\n`;
    index += 1;
}
code += "];\n";
fs.writeFileSync("src/Levels.js", code);
