import { randElement, randInt, range, simplePlural } from "./Utils";

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
