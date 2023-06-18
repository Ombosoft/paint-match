import { useSyncExternalStore } from "react";

// Returns true if the page is currently is visible in foreground browser tab
export function usePageVisibility() {
    return useSyncExternalStore(subscribe, getSnapshot);
}

function subscribe(callback) {
    const visibilityChange = getBrowserVisibilityProp();
    document.addEventListener(visibilityChange, callback, false);
    return () => {
        document.removeEventListener(visibilityChange, callback);
    };
}

function getSnapshot() {
    return !document[getBrowserDocumentHiddenProp()];
}

function getBrowserVisibilityProp() {
    if (typeof document.hidden !== "undefined") {
        return "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        return "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        return "webkitvisibilitychange";
    }
}

 function getBrowserDocumentHiddenProp() {
    if (typeof document.hidden !== "undefined") {
        return "hidden";
    } else if (typeof document.msHidden !== "undefined") {
        return "msHidden";
    } else if (typeof document.webkitHidden !== "undefined") {
        return "webkitHidden";
    }
}
