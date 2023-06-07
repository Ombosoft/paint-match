import { useSyncExternalStore } from "react";

// returns width: px
export default function useViewportWidth() {
    return useSyncExternalStore(subscribe, getWidthSnapshot);
}

function subscribe(callback) {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
}

function getWidthSnapshot() {
    return window.innerWidth;
}
