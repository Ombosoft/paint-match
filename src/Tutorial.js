import { useLocalStorage } from "./LocalStorageHook";
import React, { useCallback, useEffect, useState } from "react";

export default function useTutorial() {
    const [showBasicTutorial, setShowBasicTutorial] = useLocalStorage("tutorial", true);
    const endBasicTutorial = useCallback(() => {
        setShowBasicTutorial(false);
    }, [setShowBasicTutorial]);


    return [showBasicTutorial, endBasicTutorial];
}