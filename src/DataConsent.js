import { readFromLS, useLocalStorage } from "./Util/LocalStorageHook";

const dataConsentKey = "data-consent";

export function useDataConsent() {
    return useLocalStorage(dataConsentKey, null);
}

export function getDataConsent() {
    return readFromLS(dataConsentKey, null);
}