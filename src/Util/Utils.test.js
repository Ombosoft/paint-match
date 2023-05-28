import {
    compareBy,
    groupBy,
    isObject,
    mapValues,
    randElement,
    randInt,
    range,
    simplePlural,
} from "./Utils";

test("randInt", () => {
    for (let i = 0; i < 100; ++i) {
        let rnd = randInt(0, 10);
        expect(rnd).toBeGreaterThanOrEqual(0);
        expect(rnd).toBeLessThanOrEqual(10);
    }
});

test("randElement", () => {
    const arr = [11, 22, 33, 44, 55];
    for (let i = 0; i < 100; ++i) {
        let rnd = randElement(arr);
        expect(arr).toContain(rnd);
    }
});

test("simplePlural", () => {
    expect(simplePlural(1, "droplet")).toEqual("droplet");
    expect(simplePlural(2, "droplet")).toEqual("droplets");
});

test("range", () => {
    expect(range(0)).toEqual([]);
    expect(range(1)).toEqual([0]);
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
});

test("compareBy", () => {
    let a = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
    ];
    a.sort(compareBy((x) => x.y));
    expect(a).toStrictEqual([
        { x: 2, y: 1 },
        { x: 1, y: 2 },
    ]);
});

test("groupBy", () => {
    expect(groupBy([3.14, 2.2, 2.3], (x) => Math.floor(x))).toStrictEqual({
        3: [3.14],
        2: [2.2, 2.3],
    });
    let xs = [
        { x: 1, y: 2 },
        { x: 1, y: 3 },
        { x: 2, y: 1 },
        { x: 2, y: 4 },
    ];
    expect(groupBy(xs, (x) => x.x)).toStrictEqual({
        1: [
            { x: 1, y: 2 },
            { x: 1, y: 3 },
        ],
        2: [
            { x: 2, y: 1 },
            { x: 2, y: 4 },
        ],
    });
});

test("mapValues", () => {
    expect(mapValues({ x: 1, y: 2, z: 3 }, x => x*x)).toStrictEqual({ x: 1, y: 4, z: 9 })
})

test("isObject", () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject({a: 1})).toBeTruthy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject([])).toBeFalsy();
});