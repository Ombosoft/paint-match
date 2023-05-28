import { zeroComponents } from "./Colors";
import { minCost, optimalPath, optimalSolution } from "./GameAI";

const red = { ...zeroComponents, red: 1 };
const cyan = { ...zeroComponents, cyan: 1 };
const black = { ...zeroComponents, black: 1 };
const eps = 0.6;

test("optimalSolution1", () => {
    expect(optimalSolution([100, 0, 0, 0], eps)).toStrictEqual(cyan);
    expect(optimalSolution([0, 0, 0, 100], eps)).toStrictEqual(black);
    expect(optimalSolution([0, 100, 100, 0], eps)).toStrictEqual(red);
});

test("optimalSolution2", () => {
    expect(optimalSolution([0, 50, 100, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 1,
        red: 1,
    });
    expect(optimalSolution([50, 100, 0, 0], eps)).toStrictEqual({
        ...zeroComponents,
        blue: 1,
        magenta: 1,
    });
});

test("optimalSolution3", () => {
    expect(optimalSolution([0, 33, 100, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 2,
        red: 1,
    });
});

test("optimalSolutionGray", () => {
    expect(optimalSolution([0, 0, 0, 50], eps)).toStrictEqual({
        ...zeroComponents,
        white: 1,
        black: 1,
    });
});

test("optimalSolutionBone", () => {
    expect(optimalSolution([0, 0, 20, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 3,
        white: 4,
    });
});

test("optimalSolutionPlum", () => {
    expect(optimalSolution([0, 27, 0, 0], 0.9)).toStrictEqual({
        ...zeroComponents,
        magenta: 7,
        white: 6,
    });
});

test("optimalSolutionYolk", () => {
    expect(optimalSolution([0, 10, 100, 0], eps)).toStrictEqual({
        ...zeroComponents,
        yellow: 9,
        red: 1,
    });
});

test("optimalSolutionPink", () => {
    expect(optimalSolution([0, 25, 20, 0], eps)).toStrictEqual({
        ...zeroComponents,
        magenta: 1,
        white: 9,
        red: 4,
    });
});

test("optimalSolutionMediumRed", () => {
    expect(optimalSolution([0, 100, 100, 7], eps)).toStrictEqual({
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

test("optimalPathTrivial", () => {
    expect(optimalPath(zeroComponents, [100, 0, 0, 0], eps)).toStrictEqual(
        cyan
    );
});

test("optimalPathImpossible", () => {
    expect(optimalPath(cyan, [0, 100, 0, 0], eps, 10)).toStrictEqual(
        null
    );
});

test("optimalPath1", () => {
    expect(
        optimalPath(
            {
                ...zeroComponents,
                red: 1,
            },
            [0, 50, 100, 0],
            eps
        )
    ).toStrictEqual({
        ...zeroComponents,
        yellow: 1,
    });
    expect(
        optimalPath(
            {
                ...zeroComponents,
                yellow: 1,
            },
            [0, 50, 100, 0],
            eps
        )
    ).toStrictEqual({
        ...zeroComponents,
        red: 1,
    });
    expect(
        optimalPath(
            {
                ...zeroComponents,
                magenta: 1,
            },
            [50, 100, 0, 0],
            eps
        )
    ).toStrictEqual({
        ...zeroComponents,
        blue: 1,
    });
    expect(
        optimalPath(
            {
                ...zeroComponents,
                blue: 1,
            },
            [50, 100, 0, 0],
            eps
        )
    ).toStrictEqual({
        ...zeroComponents,
        magenta: 1,
    });
});
