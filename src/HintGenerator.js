import { getWinTolerance, zeroComponents } from "./Colors";
import { optimalPath } from "./GameAI";
import { objectMaxComponent } from "./Util/Vec";

export default function generateHint(components, targetLevel) {
    const path = optimalPath(components, targetLevel.cmyk, getWinTolerance(targetLevel));
    if (path === null) {
        return "It's easier to start over";
    }
    if (path === zeroComponents) {
        return "";
    }
    const maxDiff = objectMaxComponent(path);
    const component = Object.keys(maxDiff)[0];
    return `Add a little ${component}`;
}