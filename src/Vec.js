export function vecAdd2(u, v) {
    return u.map((c, index) => c + v[index]);
}

export function vecComponentWiseProduct(u, v) {
    return u.map((c, index) => c * v[index]);
}
export function matScaleByVec(m, v) {
    return m.map((col, index) => vecScale(col, v[index]));
}

export function vecNormalize(v) {
    const max = Math.max(...v);
    return v.map(c => max !== 0 ? c / max : 0);
}

export function vecRound(v) {
    return v.map(Math.round);
}

export function vecScale(v, scalar) {
    return v.map(c => c * scalar);
}

export function vecAdd(...vectors) {
    return vectors.reduce((u, v) => vecAdd2(u, v), vecScale(vectors[0], 0));
}

export function vecCompSum(v) {
    return v.reduce((a, b) => a + b, 0);
}

export function matCompSum(m) {
    return m.reduce((a, b) => vecAdd2(a,  b), vecScale(m[0], 0));
}

export function vecDistance(a, b) {
    let distance = 0;
    for (let i = 0; i < a.length; ++i) {
        distance += Math.abs(a[i] - b[i]);
    }
    return distance;
}

