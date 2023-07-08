import { Capacitor } from "@capacitor/core";
import { useSyncExternalStore } from "react";

// returns true if touch screen
export default function useIsTouchScreen() {
    return useSyncExternalStore(subscribe, getSnapshot);
}

export function getPlatform() {
    return Capacitor.getPlatform();
}

function subscribe() {
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
