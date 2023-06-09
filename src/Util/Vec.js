import { isObject, mapValues } from "./Utils";

// Add two vectors element-wise.
export function vecAdd2(u, v) {
    return u.map((c, index) => c + v[index]);
}

// Compute the component-wise product of two vectors.
export function vecComponentWiseProduct(u, v) {
    return u.map((c, index) => c * v[index]);
}

// Scale each column of a matrix by the corresponding component in a vector.
export function matScaleByVec(m, v) {
    return m.map((col, index) => vecScale(col, v[index]));
}

// Normalize a vector by dividing each component by the maximum component value.
export function vecNormalize(v) {
    const max = Math.max(...v);
    return v.map((c) => (max !== 0 ? c / max : 0));
}

// Round each component of a vector.
export function vecRound(v) {
    return v.map(Math.round);
}

// Scale a vector by a scalar value.
export function vecScale(v, scalar) {
    console.assert(Number.isFinite(scalar));
    return v.map((c) => c * scalar);
}

// Add multiple vectors element-wise.
export function vecAdd(...vectors) {
    return vectors.reduce((u, v) => vecAdd2(u, v), vecScale(vectors[0], 0));
}

// Compute the sum of components in a vector.
export function vecCompSum(v) {
    return v.reduce((a, b) => a + b, 0);
}

// Add up all values in the object
export function objectValueSum(obj) {
    return vecCompSum(Object.values(obj));
}

// Return object with all values multiplied by a factor
export function objectValueScale(obj, factor) {
    console.assert(Number.isFinite(factor));
    return mapValues(obj, (x) => factor * x);
}

// Return new object with values formed by adding u and v values
export function objectAdd2(u, v) {
    console.assert(isObject(u));
    console.assert(isObject(v));
    let result = { ...u };
    Object.entries(v).forEach(([key, x]) => {
        result[key] = (result[key] ?? 0) + x;
    });
    return result;
}

// Return new object with values formed by substracting u and v values
export function objectSubstract2(u, v) {
    return objectAdd2(u, objectValueScale(v, -1));
}

// Returns key: value for the biggest value on obj
export function objectMaxComponent(obj) {
    let maxKey = null;
    let maxVal = Number.MIN_SAFE_INTEGER;
    for (const [key, x] of Object.entries(obj)) {
        if (x > maxVal) {
            maxVal = x;
            maxKey = key;
        }
    };
    let result = {};
    result[maxKey] = maxVal;
    return result;
}

// Compute the sum of components in a matrix.
export function matCompSum(m) {
    return m.reduce((a, b) => vecAdd2(a, b), vecScale(m[0], 0));
}

// Calculate the distance between two vectors as the sum of the absolute differences of their components.
export function vecDistance(a, b) {
    let distance = 0;
    for (let i = 0; i < a.length; ++i) {
        distance += Math.abs(a[i] - b[i]);
    }
    return distance;
}
