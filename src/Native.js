import { StatusBar } from "@capacitor/status-bar";
import { Style } from "@mui/icons-material";
import { SafeArea } from "capacitor-plugin-safe-area";
import { isAndroidNative, isNative } from "./Util/DeviceTypeDetector";

export function nativeInit() {
    try {
        if (!isNative()) {
            return;
        }
        nativeInitImpl();
    } catch (ex) {
        console.warn("Native init exception", ex);
    }
}

function nativeInitImpl() {
    if (isAndroidNative()) {
        StatusBar.setOverlaysWebView({ overlay: false });
        StatusBar.setStyle({ style: Style.Dark });
        StatusBar.setBackgroundColor({ color: "#141414" });
    }
    document.addEventListener("ionBackButton", (ev) => {
        ev.detail.register(9999, (processNextHandler) => {
            console.log("Handler A was called!");
        });
    });
}

// Returns number of pixels I need to reserve in order to not overlap with status bar
export async function getStatusBarHeight() {
    if (!isNative()) {
        return 0;
    }
    const { statusBarHeight } = await SafeArea.getStatusBarHeight();
    return statusBarHeight;
}
