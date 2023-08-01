import { isAppleOrOldAndroid } from "./Util/DeviceTypeDetector";

const noAnimations = isAppleOrOldAndroid();

export const extraCommitDelay = -500;
export const animationDurationMs = noAnimations ? 0 : 800;
export const dropletBlendDelay = noAnimations ? 0 : 300;
export const victoryPanelDelay = animationDurationMs + dropletBlendDelay + 300;
export const victorySoundDelay = animationDurationMs - 200;
export const hintTypingDelay = 600;
export const hideTooltipDelay = 6000;

export const dropletsUntilReset = 4;

export const musicVolume = 1;
export const musicRate = 1;
export const musicFadeDurationMs = 500;

export const defaultWinTolerance = 0.7;

export const imgPath = (fileName) =>
    process.env.PUBLIC_URL + `/img/${fileName}`;

export const textForeground = "#e7e7e7";
