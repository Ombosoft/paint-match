import { registerPlugin } from "@capacitor/core";
import { isNative } from "./DeviceTypeDetector";

const Meta = registerPlugin("OmMeta");

export async function rateMeta() {
    if (isNative()) {
        try {
            const result = await Meta.log({ event: "rate" });
            console.log("meta plugin", result.success );
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
}

export async function requestReview() {
    if (isNative()) {
        try {
            await Meta.requestReview();
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
}
