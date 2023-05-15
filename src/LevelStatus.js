import { useLocalStorage } from "./LocalStorageHook";

export default function useLevelStatus() {
    const [curLevel, setCurLevel] = useLocalStorage("level", 0);
    return [curLevel, setCurLevel];
}