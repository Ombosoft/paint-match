import { isNative } from "./Util/DeviceTypeDetector";
import { readFromLS, useLocalStorage } from "./Util/LocalStorageHook";

const dataConsentKey = "data-consent";

export function useDataConsent() {
    return useLocalStorage(dataConsentKey, defaultConsent());
}

export function getDataConsent() {
    return readFromLS(dataConsentKey, defaultConsent());
}

function defaultConsent() {
    // itch has its own site-wise cookie consent
    return isNative() ? null : true;
}