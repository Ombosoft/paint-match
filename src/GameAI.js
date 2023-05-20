import colorDistance from "./ColorDistance";
import { blendPaints, zeroComponents } from "./Colors";
import { objectValueSum } from "./Util/Vec";

// source: array[CMYK] -> dest: array[CMYK] -> eps: number -> object{components}
export default function optimalPath(dest, eps) {
    const source = [0, 0, 0, 0];
    console.assert(Array.isArray(dest));
    const componentNames = Object.keys(zeroComponents);
    let maxCost = 10;
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
            if (
                visited[nextCompsKey]
            ) {
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
