import { blendPaints, zeroComponents } from "./Colors";
import optimalPath from "./GameAI";

const red = { ...zeroComponents, red: 1 };
const cyan = { ...zeroComponents, cyan: 1 };
const black = { ...zeroComponents, black: 1 };

test("optimalPath0", () => {
    expect(
        optimalPath(zeroComponents, blendPaints(zeroComponents), 0.1)
    ).toStrictEqual(zeroComponents);
    expect(optimalPath(red, [0, 100, 100, 0], 0.1)).toStrictEqual(red);
});

test("optimalPath1", () => {
    expect(
        optimalPath(zeroComponents, [100, 0, 0, 0], 0.1)
    ).toStrictEqual(cyan);
    expect(
        optimalPath(cyan, [100, 100, 0, 0], 0.1)
    ).toStrictEqual({...zeroComponents, cyan: 1, magenta: 1});
    expect(
        optimalPath(zeroComponents, [0, 0, 0, 100], 0.1)
    ).toStrictEqual(black);
    expect(
        optimalPath(zeroComponents, [0, 100, 100, 0], 0.1)
    ).toStrictEqual(red);
});

test("optimalPath2", () => {
    expect(
        optimalPath(zeroComponents, [0, 50, 100, 0], 0.1)
    ).toStrictEqual({...zeroComponents, yellow: 1, red: 1});
    expect(
        optimalPath(zeroComponents, [50, 100, 0, 0], 0.1)
    ).toStrictEqual({...zeroComponents, blue: 1, magenta: 1});
});

test("optimalPath3", () => {
    expect(
        optimalPath(zeroComponents, [0, 33, 100, 0], 0.1)
    ).toStrictEqual({...zeroComponents, yellow: 2, red: 1});
});

test("optimalPathGray", () => {
    expect(
        optimalPath(zeroComponents, [0, 0, 0, 50], 0.1)
    ).toStrictEqual({...zeroComponents, white: 1, black: 1});
});
