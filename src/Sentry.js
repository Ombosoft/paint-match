import * as Sentry from "@sentry/react";
import { getDataConsent } from "./DataConsent";
const sentryDsn =
    "https://7ba852b4802048b191a9deda0dc08547@o4505380972265472.ingest.sentry.io/4505380974886912";

export function sentryInit() {
    try {
        if (getDataConsent() === false) {
            return;
        }
        Sentry.init({
            environment: process.env.NODE_ENV,
            release: "11.7",
            dsn: sentryDsn,
            integrations: [
                new Sentry.Replay({
                    maskAllText: false,
                    blockAllMedia: false,
                }),
            ],
            // Performance Monitoring
            tracesSampleRate: 0.1,
            // Session Replay
            replaysSessionSampleRate: 0.001,
            replaysOnErrorSampleRate: 1.0,
        });
    } catch {}
}

export function sentryDisable() {
    try {
        Sentry.getCurrentHub().getClient().getOptions().enabled = false;
    } catch {}
}
