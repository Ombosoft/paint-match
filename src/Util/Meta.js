import { registerPlugin } from "@capacitor/core";
import { isAndroidNative } from "./DeviceTypeDetector";

const Meta = registerPlugin("OmMeta");

export async function rateMeta() {
    if (isAndroidNative()) {
        try {
            const result = await Meta.log({ event: "rate" });
            console.log("meta plugin", result.success );
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
}
