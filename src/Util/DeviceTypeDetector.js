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
    const apple = browser.satisfies({ safari: ">=0", ios: ">=0" });
    const android = browser.getOSName() === "Android";
    return apple || (android && getMajorVersion(browser.getOSVersion()) < 10);
}

function getMajorVersion(version) {
    if (!version) {
        return 0;
    }
    const osMajorVersionMatch = version.match(/^(\d+)\.?/);
    return Number.parseInt(osMajorVersionMatch ? osMajorVersionMatch[1] : "0");
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
