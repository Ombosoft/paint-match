import { useSyncExternalStore } from "react";

// returns true if touch screen
export default function useIsTouchScreen() {
    return useSyncExternalStore(subscribe, getSnapshot);
}

function subscribe(callback) {
    return () => {};
}

function getSnapshot() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
