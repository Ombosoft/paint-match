import {
    matCompSum,
    matScaleByVec,
    objectValueSum,
    vecAdd,
    vecAdd2,
    vecComponentWiseProduct,
    vecCompSum,
    vecDistance,
    vecNormalize,
    vecRound,
    vecScale
} from "./Vec";

test("vecAdd2", () => {
    const u = [1, 2, 3];
    const v = [4, 5, 6];
    expect(vecAdd2(u, v)).toStrictEqual([5, 7, 9]);
});

test("vecComponentWiseProduct", () => {
    const u = [1, 2, 3];
    const v = [-1, 0, 1];
    expect(vecComponentWiseProduct(u, v)).toStrictEqual([-1, 0, 3]);
});

test("matScaleByVec", () => {
    const m = [
        [1, 2, 3],
        [0, 0, 0],
        [3, 2, 1],
    ];
    const v = [-1, 0, 1];
    expect(matScaleByVec(m, v)).toStrictEqual([
        [-1, -2, -3],
        [0, 0, 0],
        [3, 2, 1],
    ]);
});

test("matCompSum", () => {
    const m = [
        [1, 2, 3],
        [0, 0, 0],
        [3, 2, 5],
    ];
    expect(matCompSum(m)).toStrictEqual([4, 4, 8]);
});

test("vecScale", () => {
    const u = [1, 2, 3];
    expect(vecScale(u, 2)).toStrictEqual([2, 4, 6]);
});

test("vecRound", () => {
    const u = [1.1, 2.9, 3.5, 4.0];
    expect(vecRound(u, 2)).toStrictEqual([1, 3, 4, 4]);
});

test("vecNormalize", () => {
    const u = [1, 2, 4, 0];
    expect(vecNormalize(u)).toStrictEqual([0.25, 0.5, 1, 0]);
});

test("vecNormalize0", () => {
    const u = [0, 0, 0, 0];
    expect(vecNormalize(u)).toStrictEqual([0, 0, 0, 0]);
});

test("vecAdd1", () => {
    const u = [1, 2, 3];
    expect(vecAdd(u)).toStrictEqual(u);
});

test("vecAdd3", () => {
    const u = [1, 2, 3];
    const v = [0.1, 0.2, 0.3];
    const x = [0.01, 0.02, 0.03];
    const r = vecAdd(u, v, x);
    expect(r[0]).toBeCloseTo(1.11);
    expect(r[1]).toBeCloseTo(2.22);
    expect(r[2]).toBeCloseTo(3.33);
});

test("vecDistance", () => {
    const u = [1, 2, 3];
    const v = [1, 2, 4];
    expect(vecDistance(u, v)).toStrictEqual(1);
});

test("vecCompSum", () => {
    const u = [1, 2, 3];
    expect(vecCompSum(u)).toStrictEqual(6);
});

test("objectValueSum", () => {
    const u = {a: 1, b: 2, c: 3};
    expect(objectValueSum(u)).toStrictEqual(6);
});
