import { zeroComponents } from "./Colors";
import { minCost, optimalPath } from "./GameAI";

const red = { ...zeroComponents, red: 1 };
const cyan = { ...zeroComponents, cyan: 1 };
const black = { ...zeroComponents, black: 1 };
const eps = 0.6;

test("optimalPath1", () => {
    expect(optimalPath([100, 0, 0, 0], eps)).toStrictEqual(cyan);
    expect(optimalPath([0, 0, 0, 100], eps)).toStrictEqual(black);
    expect(optimalPath([0, 100, 100, 0], eps)).toStrictEqual(red);
});

test("optimalPath2", () => {
    expect(optimalPath([0, 50, 100, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 1,
        red: 1,
    });
    expect(optimalPath([50, 100, 0, 0], eps)).toStrictEqual({
        ...zeroComponents,
        blue: 1,
        magenta: 1,
    });
});

test("optimalPath3", () => {
    expect(optimalPath([0, 33, 100, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 2,
        red: 1,
    });
});

test("optimalPathGray", () => {
    expect(optimalPath([0, 0, 0, 50], eps)).toStrictEqual({
        ...zeroComponents,
        white: 1,
        black: 1,
    });
});

test("optimalPathBone", () => {
    expect(optimalPath([0, 0, 20, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 3,
        white: 4,
    });
});

test("optimalPathPlum", () => {
    expect(optimalPath([0, 27, 0, 0], 0.9)).toStrictEqual({
        ...zeroComponents,
        magenta: 7,
        white: 6,
    });
});

test("optimalPathYolk", () => {
    expect(optimalPath([0,10,100,0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 9,
        red: 1,
    });
});

test("optimalPathPink", () => {
    expect(optimalPath([0,25,20,0], eps)).toStrictEqual({
        ...zeroComponents,
        magenta: 1,
        white: 9,
        red: 4,
    });
});

test("optimalPathMediumRed", () => {
    expect(optimalPath([0,100,100,7], eps)).toStrictEqual({
        ...zeroComponents,
        black: 1,
        red: 13,
    });
});

test("minCost", () => {
    expect(minCost([0, 100, 100, 0], eps)).toBe(1);
    expect(minCost([0, 0, 20, 0], eps)).toBe(7);
    expect(minCost([0, 45, 100, 0], eps)).toBe(11);
});
