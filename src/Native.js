import { StatusBar, Style } from "@capacitor/status-bar";
import { isAndroidNative, isNative } from "./Util/DeviceTypeDetector";

export function nativeInit() {
    try {
        if (!isNative()) {
            return;
        }
        if (isAndroidNative()) {
            androidInit();
        }
    } catch (ex) {
        console.warn('Native init exception', ex);
    }
}

function androidInit() {
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setStyle({ style: Style.Dark });
    StatusBar.setBackgroundColor({ color: "#141414" });
}
