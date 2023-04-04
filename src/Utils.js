// Generate a random integer between min (inclusive) and max (exclusive).
export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Convert color distance to percentage of match.
// The closer the distance is to zero, the higher the percentage of match.
export function distanceToPercentMatch(distance) {
    return Math.round(100 - Math.min(100, distance / 3));
}