import { Capacitor } from "@capacitor/core";
import Bowser from "bowser";
import { useSyncExternalStore } from "react";

// returns true if touch screen
export function useIsTouchScreen() {
    return useSyncExternalStore(subscribe, getSnapshot);
}

export function getPlatform() {
    return Capacitor.getPlatform();
}

export function isNative() {
    return getPlatform() !== "web";
}

export function isAndroidNative() {
    return getPlatform() === "android";
}

export function isAppleOrOldAndroid() {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const apple = browser.satisfies({ safari: ">=0", ios: ">=0"});
    const android = browser.getOSName() === "Android";
    const osMajorVersionMatch = browser.getOSVersion().match(/^(\d+)\.?/);
    const osMajorVersion = Number.parseInt(osMajorVersionMatch ? osMajorVersionMatch[1] : "0");
    return apple || (android && osMajorVersion < 10);
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
