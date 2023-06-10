import { useSyncExternalStore } from "react";

export function useViewportPercent() {
    const viewportWidth = useViewportWidth();
    const viewportHeight = useViewportHeight();
    return (x) => x * Math.min(viewportWidth, viewportHeight) / 100
}

// returns width: px
export function useViewportWidth() {
    return useSyncExternalStore(subscribe, getWidthSnapshot);
}

// returns height: px
export function useViewportHeight() {
    return useSyncExternalStore(subscribe, getHeightSnapshot);
}

function subscribe(callback) {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
}

function getWidthSnapshot() {
    return window.innerWidth;
}

function getHeightSnapshot() {
    return window.innerHeight;
}
