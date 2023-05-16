import { useState } from "react";

// Custom hook to manage localStorage data with fallback.
export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch {
            return defaultValue;
        }
    });
    
    const setValueAndStore = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setValueAndStore];
}
