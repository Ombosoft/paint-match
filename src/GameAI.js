import colorDistance from "./ColorDistance";
import { blendPaints } from "./Colors";

// source: object -> dest: array[CMYK] -> eps: number -> object
export default function optimalPath(source, dest, eps) {
    // TODO BFS not greedy
    let stepsLeft = 10;
    let result = {...source};
    while (stepsLeft > 0 && colorDistance(blendPaints(result), dest) > eps) {
        stepsLeft -= 1;
        let minDistance = Number.MAX_SAFE_INTEGER;
        let bestComponent = null;
        for(const component of Object.keys(result)) {
            result[component] += 1;
            const distance = colorDistance(blendPaints(result), dest);
            if (distance < minDistance) {
                minDistance = distance;
                bestComponent = component;
            }
            result[component] -= 1;
        }
        result[bestComponent] += 1;
    }
    return result;
}
