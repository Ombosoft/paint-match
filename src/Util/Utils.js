// Generate a random integer between min (inclusive) and max (exclusive).
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Pick random element from array
export function randElement(arr) {
    return arr[randInt(0, arr.length)];
}

// Convert color distance to percentage of match.
// The closer the distance is to zero, the higher the percentage of match.
export function distanceToPercentMatch(distance, victory) {
    if (victory) {
        return 100;
    }
    const percent = Math.max(100 - 2 * distance, 0);
    if (percent < 97.1) {
        return Math.round(percent);
    }
    return percent.toFixed(1);
}

export function randomLevel() {
    const min = 5;
    const max = 95;
    return {
        name: "",
        cmyk: [
            randInt(min, max),
            randInt(min, max),
            randInt(min, max),
            randInt(min, max / 2),
        ],
        tolerance: 5,
    };
}

export function simplePlural(count, singular) {
    return count === 1 ? singular : singular + "s";
}

export function range(upperExclusive) {
    return [...Array(upperExclusive).keys()];
}

// Easy compar function for sort, e.g.
// xs.sort(compareBy(x => x.field));
export function compareBy(getter) {
    return (a, b) => {
        const av = getter(a);
        const bv = getter(b);
        return av > bv ? 1 : bv > av ? -1 : 0;
    };
}

// [x] -> (x => y) -> {y: [xs]}
export function groupBy(arr, getter) {
    return arr.reduce(
        (r, val, i, a, key = getter(val)) => ((r[key] || (r[key] = [])).push(val), r),
        {}
    );
}
