import { colorTable } from "../Levels.js";
const fs = require('fs');

let code = "export const colorTable = [\n";
let index = 0;
for (const level of colorTable) {
    code += 
        `    { index: ${index}, name: "${level.name}", cmyk: ${JSON.stringify(
            level.cmyk
        )}, tolerance: ${level.tolerance} }\n`
    ;
    index += 1;
}
code += '];\n';
console.log(code);
fs.writeFileSync('Levels.js', code);
// console.log(`export const colorTable = ${JSON.stringify(colorTable, null, 4)};`)
