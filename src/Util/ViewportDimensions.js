import { useSyncExternalStore } from "react";

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
