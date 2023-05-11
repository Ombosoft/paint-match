import convert from "color-convert";
const {
    diff,
} = require('color-diff');

function lab(cs) {
    return {
        L: cs[0],
        a: cs[1],
        b: cs[2],
    };
}

// Returns CIEDE2000 distance between two arrays representing CMYK componentss
export default function colorDistance(targetCmyk, curCmyk) {
    const targetLab = lab(convert.cmyk.lab(targetCmyk));
    const curLab = lab(convert.cmyk.lab(curCmyk));
    const dist = diff(targetLab, curLab);
    return dist;
}