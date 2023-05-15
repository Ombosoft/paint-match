import { useState } from "react";
import { useLocalStorage } from "./LocalStorageHook";

export default function useLevelStatus() {
    const [curLevel, setCurLevel] = useLocalStorage("level", 0);
    const [open, setOpen] = useState(false);
    return [curLevel, setCurLevel, open, setOpen];
}