import { useEffect, useState } from "react";

// Custom hook to manage localStorage data with fallback.
export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) ?? defaultValue);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}