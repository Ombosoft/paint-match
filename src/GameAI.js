import colorDistance from "./ColorDistance";
import { blendPaints, zeroComponents } from "./Colors";
import { range } from "./Util/Utils";
import { objectValueSum } from "./Util/Vec";

function basisComponents(dest) {
    let result = ['white', 'black'];
    const colorKeys = ["red", "green", "blue", "cyan", "magenta", "yellow"];
    for (const componentName of colorKeys) {
        let probe = { ...zeroComponents };
        probe[componentName] = 1;
        const compCmyk = blendPaints(probe);
        for (let i in range(4)) {
            if (compCmyk[i] !== 0 && dest[i] !== 0) {
                result.push(componentName);
                break;
            }
        }
    }
    return result;
}

// source: array[CMYK] -> dest: array[CMYK] -> eps: number -> object{components}
export function optimalPath(dest, eps, maxCost = 13) {
    const source = [0, 0, 0, 0];
    console.assert(Array.isArray(dest));
    const componentNames = basisComponents(dest);
    let buf = [{ cmyk: source, comps: zeroComponents }];
    // comps (path) -> bool
    let visited = {};
    visited[JSON.stringify(zeroComponents)] = true;
    while (buf.length > 0) {
        const cur = buf.shift();
        const curColorDistance = colorDistance(cur.cmyk, dest);
        if (curColorDistance < eps) {
            return cur.comps;
        }
        for (const componentName of componentNames) {
            let nextComps = { ...cur.comps };
            nextComps[componentName] += 1;
            const cost = objectValueSum(nextComps);
            if (cost > maxCost) {
                continue;
            }
            const nextCMYK = blendPaints(nextComps);
            const nextCompsKey = JSON.stringify(nextComps);
            if (visited[nextCompsKey]) {
                // console.log('visited', nextComps);
                continue;
            }
            // console.log(cur.comps, '=>', nextComps)
            visited[nextCompsKey] = true;
            buf.push({ cmyk: nextCMYK, comps: nextComps });
        }
    }
    // todo get closest anyway
    return zeroComponents;
}

export function minCost(dest, eps) {
    return objectValueSum(optimalPath(dest, eps));
}
