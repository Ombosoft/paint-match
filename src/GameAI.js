import colorDistance from "./ColorDistance";
import { blendPaints, zeroComponents } from "./Colors";
import { compareBy, isObject, range } from "./Util/Utils";
import { objectSubstract2, objectValueSum } from "./Util/Vec";

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

function prune(buf, requiredSize) {
    buf.sort(compareBy(x => x.colorDistance));
    return buf.slice(0, requiredSize);
}

// source: array[CMYK] -> dest: array[CMYK] -> eps: number -> object{components}
export function optimalSolution(dest, eps, maxCost = 50) {
    return optimalPath(zeroComponents, dest, eps, maxCost);
}

export function optimalPath(sourceComponents, dest, eps, maxAddedCost = 50) {
    const maxCost = maxAddedCost + objectValueSum(sourceComponents);
    const pruneThreshold = 1000;
    const pruneTarget = 100;
    let maxBufLen = 0;
    console.assert(isObject(sourceComponents));
    console.assert(Array.isArray(dest));
    const componentNames = basisComponents(dest);
    const source = blendPaints(sourceComponents);
    let buf = [{ cmyk: source, comps: sourceComponents, colorDistance: Number.MAX_SAFE_INTEGER }];
    // comps (path) -> bool
    let visited = {};
    visited[JSON.stringify(zeroComponents)] = true;
    while (buf.length > 0) {
        maxBufLen = Math.max(maxBufLen, buf.length);
        if (buf.length > pruneThreshold) {
            buf = prune(buf, pruneTarget);
        }
        const cur = buf.shift();
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
                continue;
            }
            // console.log(cur.comps, '=>', nextComps)
            visited[nextCompsKey] = true;
            const nextColorDistance = colorDistance(nextCMYK, dest);
            if (nextColorDistance < eps) {
                return objectSubstract2(nextComps, sourceComponents);
            }
            buf.push({ cmyk: nextCMYK, comps: nextComps, colorDistance: nextColorDistance });
        }
    }
    // todo get closest anyway
    return null;
}

export function minCost(dest, eps) {
    return objectValueSum(optimalSolution(dest, eps));
}
