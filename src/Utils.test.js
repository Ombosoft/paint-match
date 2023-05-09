import { randElement, randInt } from "./Utils";

test('randInt', () => {
    for (let i = 0; i < 100; ++i) {
        let rnd = randInt(0, 10);
        expect(rnd).toBeGreaterThanOrEqual(0);
        expect(rnd).toBeLessThanOrEqual(10);
    }
});

test('randElement', () => {
    const arr = [11, 22, 33, 44, 55];
    for (let i = 0; i < 100; ++i) {
        let rnd = randElement(arr);
        expect(arr).toContain(rnd);
    }
});
