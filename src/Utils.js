export function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function distanceToPercentMatch(distance) {
    return Math.round(100 - Math.min(100, distance / 3));
}