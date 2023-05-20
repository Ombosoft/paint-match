import colorDistance from "./ColorDistance";

test("sameIs0", () => {
    expect(colorDistance([0, 0, 0, 0], [0, 0, 0, 0])).toStrictEqual(0);
    expect(colorDistance([100, 100, 0, 0], [100, 100, 0, 0])).toStrictEqual(0);
});

test("differentIsNonZero", () => {
    expect(colorDistance([100, 0, 0, 0], [0, 0, 0, 0])).toBeGreaterThan(0);
    expect(colorDistance([100, 0, 0, 0], [0, 100, 0, 0])).toBeGreaterThan(0);
});
