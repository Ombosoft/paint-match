import { useState } from "react";

export function readFromLS(key, defaultValue) {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (ex) {
        console.debug("Failed to read game state from local storage", ex);
        return defaultValue;
    }
}

// Custom hook to manage localStorage data with fallback.
export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => readFromLS(key, defaultValue));

    const setValueAndStore = (newValue) => {
        setValue((prevValue) => {
            const result =
                newValue instanceof Function ? newValue(prevValue) : newValue;
            try {
                localStorage.setItem(key, JSON.stringify(result));
            } catch (ex) {
                console.info("Failed to save game state to local storage", ex);
            }
            return result;
        });
    };
    return [value, setValueAndStore];
}

export function useIsLocalStorageEnabled() {
    try {
        localStorage.setItem("test", "ok");
    } catch {
        return false;
    }
    return true;
}
